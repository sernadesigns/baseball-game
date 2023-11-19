import { emitter } from '@app/events';

export default function (home, visitor) {
	return new Scoreboard(home, visitor);
}

class Scoreboard {

	constructor(homeTeam, visitingTeam) {
		this.home = {
			name: homeTeam,
			score: 0
		}
		this.visitor = {
			name: visitingTeam,
			score: 0
		}
		this.currentInning = 0;
		this.currentTeamAtBat = null;
		this.count = {
			balls: 0,
			strikes: 0,
			outs: 0
		}
    this.setupScoreboard();
    emitter.on('*', (event, data) => this.handleEmittedEvent(event, data));
  }
  
  handleEmittedEvent(event, _data) {
    switch (event) {
      case 'inning:end':
        this.clearCount('outs');
        // TODO: Allow game to go past 9 innings
        if (this.currentInning < 9) {
          this.incrementInning();
        }
        break;
      case 'runner:scores':
        this.incrementScore();
        break;
    }
  }

	// getters
	get getCount() {
		return this.count;
	}
	
	get getBallCount() {
		return this.count.balls;
	}

	get getStrikeCount() {
		return this.count.strikes;
	}

	get getOutCount() {
		return this.count.outs;
	}

	get getScoreboard() {
		return {
			[this.visitor.name]: this[this.visitor.name],
			[this.home.name]: this[this.home.name]
		}
	}

	// setters
	set setCurrentInning(num) {
		this.currentInning = num;
	}

	set setAtBat(team) {
		// set currentTeamAtBat to 'home' or 'visitor'
		this.currentTeamAtBat = team;
	}

	setupScoreboard() {
		const scoreTemplate = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
		
		this[this.visitor.name] = Object.assign({}, scoreTemplate);
		this[this.home.name] = Object.assign({}, scoreTemplate);
	}

	incrementInning() {
    this.currentInning++;
    emitter.emit('inning:new');
	}

	incrementCount(type) {
		this.count[type]++;
	}

	clearCount(type) {
		this.count[type] = 0;
	}

	clearAllCounts() {
		Object.keys(this.count).forEach(type => {
			this.count[type] = 0;
		});
  }

  incrementScore() {
		const teamAtBat = this.currentTeamAtBat;
		const teamName = this[teamAtBat].name;
		this[teamAtBat].score++;
		this[teamName][this.currentInning]++;
	}

	setFinalScore() {
		this[this.home.name]['final'] = this.home.score;
		this[this.visitor.name]['final'] = this.visitor.score;
		console.table(this.getScoreboard);
	}

}