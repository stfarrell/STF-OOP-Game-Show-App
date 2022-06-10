/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.querySelector('#overlay');
const startBtn = document.querySelector('#btn__reset');
const body = document.querySelector('body');
let blurCount = 0;

class Game {
	constructor(missed, phrases, activePhrase) {
		this.missed = 0;
		this.phrases = phrases;
		this.activePhrase = null;
	}

	startGame() {
		overlay.style.visibility = 'hidden';
		const aPhrase = this.getRandomPhrase();
		console.log(aPhrase);
		aPhrase.addPhraseToDisplay();
		this.activePhrase = aPhrase;
		console.log(this.activePhrase);
	}

	getRandomPhrase() {
		console.log(this.phrases[Math.floor(Math.random() * this.phrases.length)]);
		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
	}

	handleInteraction(letterClicked) {
		letterClicked.disabled = true;
		this.activePhrase.checkLetter(letterClicked.innerText);

		if (this.activePhrase.checkLetter(letterClicked.innerText) === false) {
			letterClicked.classList.add('wrong');
			this.removeLife();
		} else {
			letterClicked.classList.add('chosen');
			this.checkForWin();
		}
	}

	removeLife() {
		const heart = document.querySelector(
			'#scoreboard > ol > li > img[src="images/fire.gif"]'
		);
		heart.src = 'images/smoke.gif';
		blurCount += 1;
		body.style.filter = `blur(${blurCount}px)`;
		this.missed += 1;
		if (this.missed === 5) {
			this.gameOver('loss');
		}
	}

	checkForWin() {
		const letters = phraseContainer.children;
		for (let letter of letters) {
			if (letter.classList.value.includes('hide')) {
				return false;
			}
		}
		this.gameOver('win');
	}

	gameOver(status) {
		console.log('game over');
		const gameOverMsg = document.querySelector('#game-over-message');
		//overlay.classList.remove('start');
		overlay.style.visibility = 'visible';
		if (status === 'loss') {
			gameOverMsg.innerText = 'Game over, try again?';
			overlay.classList.remove('win');
			overlay.classList.add('lose');
		} else {
			console.log('win');
			gameOverMsg.innerText = 'Congratulations! Play again?';
			overlay.classList.remove('lose');
			overlay.classList.add('win');
		}
	}
}

// const newGame = new Game(
// 	0,
// 	[
// 		new Phrase('grape'),
// 		new Phrase('grapefruit'),
// 		new Phrase('pine apple'),
// 		new Phrase('watermelon'),
// 		new Phrase('apple'),
// 	],
// 	null
// );
