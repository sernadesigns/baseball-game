import { emitter } from '@app/events';

export default function (game) {
	return new Announcer(game);
}

class Announcer {

  constructor(game) {
		this.name = null;
    this.count = game.scoreBoard.getCount;
    emitter.on('*', (event, data) => this.handleEmittedEvent(event, data));
	}

  handleEmittedEvent(event, data) {
    switch (event) {
      case 'announce:commentary':
        console.log(`Announcer: ${data}`);
        break;
      case 'announce:hit':
        this.hit(data);
        break;
      case 'announce:play':
        const { hit, play } = data;
        console.log(`Announcer: The ${hit} was ${play}. Out ${this.count.outs}!`);
        break;
      case 'announce:teams':
        const { visitor, home } = data;
        alert(`The ${visitor} are going against the ${home}!`);
        break;
    }
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

}