export default function(count) {
	return new Umpire(count);
}

class Umpire {

	constructor(count) {
		this.name = null;
		this.count = count;
	}

	call(call) {
		switch (call) {
			case 'ball':
				if (this.count.balls === 4) {
					console.log(`Umpire: Ball four! Take your base.`);
				} else {
					console.log(`Umpire: ball!`);
				}
				break;
			case 'foul ball':
				console.log(`Umpire: Foul ball!`);
				break;
			case 'hit by pitch':
				console.log(`Umpire: Batter hit by pitch. Take your base!`);
				break;
			case 'strike while looking':
			case 'strike while swinging':
				if (this.count.strikes !== 3) {
					console.log(`Umpire: Strike ${this.count.strikes}!`);
				} else {
					console.log(`Umpire: Strike 3! You're out!`);
				}
				break;
		}
	}

}