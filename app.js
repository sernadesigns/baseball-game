"use strict";

import Game from '@app/Game';

let app = (name) => {
	console.log(`hello from ${name}`);
}
app('Baseball');

const game = Game(
	window.prompt('Home team name?'), 
	window.prompt('Visiting team name?')
);

(function playBall() {
	game.start();
	game.end();
})();