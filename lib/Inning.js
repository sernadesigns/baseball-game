import { emitter } from '@app/events';

export default class Inning {

  constructor(scoreBoard) {
		this.scoreBoard = scoreBoard;
	}

	top() {
		console.log(`[[ Inning ${this.scoreBoard.currentInning} (top) ]]`);
		this.scoreBoard.setAtBat = 'visitor';
		
		this.atBat();
		if (this.scoreBoard.getOutCount === 3) {
			this.scoreBoard.clearCount('outs');
			this.bottom();
		}
	}

	bottom() {
		console.log(`[[ Inning ${this.scoreBoard.currentInning} (bottom) ]]`);
		this.scoreBoard.setAtBat = 'home';
		
		this.atBat();
		if (this.scoreBoard.getOutCount === 3) {
			emitter.emit('inning:end');
		}
	}

	atBat() {
		console.log('new batter');
		this.scoreBoard.clearCount('balls');
		this.scoreBoard.clearCount('strikes');
		do {
      // this.throwPitch();
      emitter.emit('pitcher:pitch');
			if (this.scoreBoard.getOutCount < 3) {
				this.atBat();
			}
		} while (this.scoreBoard.getOutCount < 3);
	}

}