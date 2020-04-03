export default function(game) {
	return new Announcer(game);
}

class Announcer {

	constructor(game) {
		this.name = null;
		this.game = game;
		this.count = game.scoreBoard.getCount;
	}

	announceTeams() {
		let { visitor, home } = this.game.getTeamNames;
		alert(`The ${visitor} are going against the ${home}!`);
	}

	hit(hit) {
		switch (hit) {
			case 'bunt':
				console.log(`Announcer: Player bunts!`);
				break;
			case 'double':
				console.log(`Announcer: Player hit a double.`);
				break;
			case 'fly ball':
				console.log(`Announcer: It's a fly ball!`);
				break;
			case 'ground ball':
				console.log(`Announcer: Player hit a grounder.`);
				break;
			case 'home run':
				console.log(`Announcer: It's going! It's going! It's gone!!! It's a home run!!!`);
				break;
			case 'line drive':
				console.log(`Announcer: It's a line drive!`);
				break;
			case 'single':
				console.log(`Announcer: Player hit a single.`);
				break;
			case 'triple':
				console.log(`Announcer: Player hit a triple.`);
				break;
		}
	}

	play(hit, play) {
		console.log(`Announcer: The ${hit} was ${play}. Out ${this.count.outs}!`);
	}

	comment(comment) {
		console.log(`Announcer: ${comment}`);
	}

}