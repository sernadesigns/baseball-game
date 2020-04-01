# baseball-game

A simple baseball simulation game in JavaScript.

## Game Play

- Open [the game](https://sernadesigns.github.io/baseball-game/index.html) in your browser
- You will be prompted to enter a "Home" and "Visiting" Team name
- Open your console to view the game narration and results

## Game Logic

### `startGame()`

- set inning to `1`
- setup bases and ensure they are empty
- call `topInning()`

### `topInning()`

- set game `atBat` to "visitor"
- call `atBat()`
- `atBat()` runs until there are `3` outs
- reset outs to `0`
- call `bottomInning()`

### `bottomInning()`

- set game `atBat` to "home"
- call `atBat()`
- `atBat()` runs until there are `3` outs
- reset outs to `0`
- if (inning < `9`) increment inning and call `topInning()`

### `atBat()`

- set ball and strike counts to `0`
- do `throwPitch()` while outs < `3`
- if (outs < `3`) call `atBat()` again

### `throwPitch()`

- get random pitch from `pitches` repo
- call `batting(pitch)`

### `batting()`

- get random call from `calls` repo
- if `ball`
  - increment ball count
	- if (ball count === `4`) call `advanceRunners(1)`
	- else call `throwPitch()`
- if `foul ball`
  - if (strike count < `2`) increment strike count
	- else call `throwPitch()`
- if `hit`
  - call `handleHit()`
- if `hit by pitch`
  - call `advanceRunners(1)`
- if `strike while looking` or `strike while swinging`
  - increment strike count
	- if (strike count !== `3`) call `throwPitch()`
	- else increment out count

### `handleHit()`

### `fielding()`

### `advanceRunners()`

### `watchHomePlate()`

- if (runner crosses) increment score of atBat team

### `endGame()`

- set final scores
- log scoreboard in table

## Repos

### Pitch Selection

- changeup
- curveball
- cutter
- fastball
- sinker
- slider

### Call Selection

- bunt
- double
- fly ball
- ground ball
- home run
- line drive
- single
- triple

### Hit Selection

- ball
- foul ball
- hit
- hit by pitch
- strike while looking
- strike while swinging
