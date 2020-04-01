export default class Scoreboard {

	constructor(home, visitor) {
		this.home = home;
		this.visitor = visitor;
		this.setupScoreboard();
	}

	get getScoreboard() {
		return {
			[this.visitor]: this[this.visitor],
			[this.home]: this[this.home]
		}
	}

	setupScoreboard() {
		const scoreTemplate = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
		
		this[this.visitor] = Object.assign({}, scoreTemplate);
		this[this.home] = Object.assign({}, scoreTemplate);
	}

	incrementScore(teamName, inning) {
		this[teamName][inning]++;
	}

	setFinalScore(homeScore, visitorScore) {
		this[this.home]['final'] = homeScore;
		this[this.visitor]['final'] = visitorScore;
	}

}