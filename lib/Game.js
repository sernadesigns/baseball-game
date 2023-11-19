import Announcer from '@app/Announcer';
import Inning from '@app/Inning';
import Scoreboard from '@app/Scoreboard';
import Umpire from '@app/Umpire';
import { getRandomInt, getRandomItem } from '@app/utils';
import * as repo from '@app/repos';
import { emitter } from '@app/events';

export default function(home, visitor) {
	return new Game(home, visitor);
}

class Game {

	constructor(homeTeam, visitingTeam) {
		this.home = {
			name: homeTeam,
			score: 0
		}
		this.visitor = {
			name: visitingTeam,
			score: 0
		}
		this.scoreBoard = Scoreboard(homeTeam, visitingTeam);
		this.announcer = Announcer(this);
		this.umpire = Umpire(this.scoreBoard.getCount);
    this.bases = [];
    this.inning = null;
    emitter.on('*', (event, data) => this.handleEmittedEvent(event, data));
  }
  
  handleEmittedEvent(event, _data) {
    switch (event) {
      case 'inning:new':
        this.inning = new Inning(this.scoreBoard);
        this.inning.top();
        break;
      case 'pitcher:pitch':
        console.log('throw pitch event');
        this.throwPitch();
        break;
    }
  }

	// getters
	get getTeamNames() {
		let { 
			visitor: { name: visitor }, 
			home: { name: home }
		} = this;
		return { visitor, home };
	}

	// methods
	start() {
    emitter.emit('announce:teams', { visitor: this.visitor.name, home: this.home.name });
		this.scoreBoard.setCurrentInning = 1;
		this.bases.length = 3;
		this.bases.fill(undefined);
    this.inning = new Inning(this.scoreBoard);
    this.inning.top();
	}

	end() {
		this.scoreBoard.setFinalScore();
	}

	throwPitch() {
		const pitch = getRandomItem(repo.pitches);
		this.batting(pitch);
	}

	batting(pitch) {
		// TODO: react to specific pitches in batting
		const call = getRandomItem(repo.calls);
		
		switch (call) {
			case 'ball':
				this.scoreBoard.incrementCount('balls');
        emitter.emit('pitch:made', call);
				if (this.scoreBoard.getBallCount === 4) {
					this.advanceRunners(1);
				} else {
					this.throwPitch();
				}
				break;
			case 'foul ball':
        emitter.emit('pitch:made', call);
				if (this.scoreBoard.getStrikeCount < 2) {
					this.scoreBoard.incrementCount('strikes');
				}
				this.throwPitch();
				break;
			case 'hit':
				this.handleHit();
				break;
			case 'hit by pitch':
        emitter.emit('pitch:made', call);
				this.advanceRunners(1);
				break;
			case 'strike while looking':
			case 'strike while swinging':
				this.scoreBoard.incrementCount('strikes');
        emitter.emit('pitch:made', call);
				if (this.scoreBoard.getStrikeCount !== 3) {
					this.throwPitch();
				} else {
					this.scoreBoard.incrementCount('outs');
				}
				break;
		}
	}

	handleHit() {
		const hit = getRandomItem(repo.hits);
    emitter.emit('announce:hit', hit);
		
		switch (hit) {
			case 'bunt':
				this.fielding(hit, 1);
				break;
			case 'double':
				this.advanceRunners(2);
				break;
			case 'fly ball':
				this.fielding(hit, 1);
				break;
			case 'ground ball':
				this.fielding(hit, 1);
				break;
			case 'home run':
				this.advanceRunners(4);
				break;
			case 'line drive':
				this.fielding(hit, 1);
				break;
			case 'single':
				this.advanceRunners(1);
				break;
			case 'triple':
				this.advanceRunners(3);
				break;
		}
	}

	fielding(hit, basePotential) {
		const outcome = getRandomInt(2) === 0 ? 'out' : 'in';
		let play;
	
		switch (hit) {
			case 'bunt':
			case 'ground ball':
				play = `fielded`;
				break;
			case 'fly ball':
			case 'line drive':
				play = `caught`;
				break;
		}
	
		if (outcome === 'out') {
			this.scoreBoard.incrementCount('outs');
      emitter.emit('announce:play', { hit, play });
		} else {
			this.advanceRunners(basePotential);
		}
	}

	advanceRunners(numBases) {
		console.log(`runners advance ${numBases} ${numBases === 1 ? 'base' : 'bases'}`);
		for (let i = 0; i < numBases; i++) {
			this.bases.unshift(i === 0 ? 'runner' : undefined);
			this.watchHomePlate(this.bases.pop());
		}
		if (this.bases.every(x => typeof x === 'string')) {
      emitter.emit('announce:commentary', 'The bases are loaded!');
		}
		console.log(this.bases);
	}

	watchHomePlate(runner) {
		if (runner !== undefined) {
      emitter.emit('runner:scores');
		}
	}

}