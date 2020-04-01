import Scoreboard from '@app/Scoreboard';

export default class Game {

	constructor(homeTeam, visitingTeam) {
		this.home = {
			name: homeTeam,
			score: 0
		}
		this.visitor = {
			name: visitingTeam,
			score: 0
		}
		this.scoreBoard = new Scoreboard(homeTeam, visitingTeam);
		this.inning = 0;
		this.atBat = null;
	}

	// getters
	get getTeamNames() {
		let { 
			visitor: { name: visitor }, 
			home: { name: home }
		} = this;
		return { visitor, home };
	}

	// setters
	set setInning(num) {
		this.inning = num;
	}

	set setAtBat(team) {
		// set atBat to 'home' or 'visitor'
		this.atBat = team;
	}

	// methods
	incrementInning() {
		this.inning++;
	}

	incrementScore() {
		this[this.atBat].score++;
		this.scoreBoard.incrementScore(this[this.atBat].name, this.inning);
	}

}