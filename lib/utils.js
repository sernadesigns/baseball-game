export function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomItem(item) {
	return item[getRandomInt(item.length)];
}