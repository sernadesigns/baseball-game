"use strict";

import Game from '@app/Game';
import { getRandomInt, getRandomItem } from '@app/utils';
import * as repo from '@app/repos';

let app = (name) => {
	console.log(`hello from ${name}`);
}
app('Baseball');

const game = new Game(
	window.prompt('Home team name?'), 
	window.prompt('Visiting team name?')
);

const count = {
	balls: 0,
	strikes: 0,
	outs: 0
};

const runners = [];

function announceTeams() {
	let { visitor, home } = game.getTeamNames;
	alert(`The ${visitor} are going against the ${home}!`);
}

function startGame() {
	game.setInning = 1;
	runners.length = 3;
	runners.fill(undefined);
	topInning();
}

function topInning() {
	console.log(`[[ Inning ${game.inning} (top) ]]`);
	game.setAtBat = 'visitor';
	
	atBat();
	if (count.outs === 3) {
		count.outs = 0;
		bottomInning();
	}
}

function bottomInning() {
	console.log(`[[ Inning ${game.inning} (bottom) ]]`);
	game.setAtBat = 'home';
	
	atBat();
	if (count.outs === 3) {
		count.outs = 0;
		// TODO: Allow game to go past 9 innings
		if (game.inning < 9) {
			game.incrementInning();
			topInning();
		}
	}
}

function atBat() {
	console.log('new batter');
	count.balls = count.strikes = 0;
	do {
		throwPitch();
		if (count.outs < 3) {
			atBat();
		}
	} while (count.outs < 3);
}

function throwPitch() {
	const pitch = getRandomItem(repo.pitches);
	batting(pitch);
}

function batting(pitch) {
	// TODO: react to specific pitches in batting
	const call = getRandomItem(repo.calls);
	
	switch (call) {
		case 'ball':
			console.log(`Umpire: ball!`);
			count.balls++;
			if (count.balls === 4) {
				console.log(`Umpire: Ball four! Take your base.`);
				advanceRunners(1);
			} else {
				throwPitch();
			}
			break;
		case 'foul ball':
			console.log(`Umpire: Foul ball!`);
			if (count.strikes < 2) {
				count.strikes++;
			}
			throwPitch();
			break;
		case 'hit':
			handleHit();
			break;
		case 'hit by pitch':
			console.log(`Umpire: Batter hit by pitch. Take your base!`);
			advanceRunners(1);
			break;
		case 'strike while looking':
		case 'strike while swinging':
			count.strikes++;
			if (count.strikes !== 3) {
				console.log(`Umpire: Strike ${count.strikes}!`);
				throwPitch();
			} else {
				console.log(`Umpire: Strike 3! You're out!`);
				count.outs++;
			}
			break;
	}
}

function handleHit() {
	const hit = getRandomItem(repo.hits);
	
	switch (hit) {
		case 'bunt':
			console.log(`Announcer: Player bunts!`);
			fielding(hit, 1);
			break;
		case 'double':
			console.log(`Announcer: Player hit a double.`);
			advanceRunners(2);
			break;
		case 'fly ball':
			console.log(`Announcer: It's a fly ball!`);
			fielding(hit, 1);
			break;
		case 'ground ball':
			console.log(`Announcer: Player hit a grounder.`);
			fielding(hit, 1);
			break;
		case 'home run':
			console.log(`Announcer: It's going! It's going! It's gone!!! It's a home run!!!`);
			advanceRunners(4);
			break;
		case 'line drive':
			console.log(`Announcer: It's a line drive!`);
			fielding(hit, 1);
			break;
		case 'single':
			console.log(`Announcer: Player hit a single.`);
			advanceRunners(1);
			break;
		case 'triple':
			console.log(`Announcer: Player hit a triple.`);
			advanceRunners(3);
			break;
	}
}

function fielding(hit, basePotential) {
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
		count.outs++;
		console.log(`Announcer: The ${hit} was ${play}. Out ${count.outs}!`);
	} else {
		advanceRunners(basePotential);
	}
}

function advanceRunners(bases) {
	console.log(`runners advance ${bases} ${bases === 1 ? 'base' : 'bases'}`);
	for (let i = 0; i < bases; i++) {
		runners.unshift(i === 0 ? 'runner' : undefined);
		watchHomePlate(runners.pop());
	}
	if (runners.every(x => typeof x === 'string')) {
		console.log(`bases loaded!`);
	}
	console.log(runners);
}

function watchHomePlate(runner) {
	if (runner !== undefined) {
		game.incrementScore();
	}
}

function endGame() {
	game.scoreBoard.setFinalScore(game.home.score, game.visitor.score);
	console.table(game.scoreBoard.getScoreboard);
}

(function playBall() {
	announceTeams();
	startGame();
	endGame();
})();