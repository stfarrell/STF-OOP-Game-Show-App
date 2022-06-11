/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.querySelector('#overlay');
const startBtn = document.querySelector('#btn__reset');
const body = document.querySelector('body');
let grayCount = 0;

class Game {
	constructor(missed, phrases, activePhrase) {
		this.missed = 0;
		this.phrases = phrases;
		this.activePhrase = null;
	}

	//Start the game!
	startGame() {
		overlay.style.visibility = 'hidden';
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	//returns a random phrase from the array.
	getRandomPhrase() {
		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
	}

	//Checks to see if life should be lost or if we should check for a victory
	handleInteraction(letterClicked) {
		letterClicked.disabled = true;

		if (this.activePhrase.checkLetter(letterClicked.innerText) === false) {
			letterClicked.classList.add('wrong');
			this.removeLife();
		} else {
			this.activePhrase.showMatchedLetter(letterClicked.innerText);
			letterClicked.classList.add('chosen');
			this.checkForWin();
		}
	}

	//removes a fire gif and replaces it with a smoke gif.  Also grays the whole screen by 20%.
	removeLife() {
		const heart = document.querySelector(
			'#scoreboard > ol > li > img[src="images/fire.gif"]'
		);
		heart.src = 'images/smoke.gif';
		grayCount += 20;
		body.style.filter = `grayscale(${grayCount}%)`;
		this.missed += 1;
		if (this.missed === 5) {
			this.gameOver('loss');
		}
	}

	//checks the game state to see if the player has won.
	checkForWin() {
		const letters = phraseContainer.children;
		for (let letter of letters) {
			if (letter.classList.value.includes('hide')) {
				return false;
			}
		}
		this.gameOver('win');
	}

	//Tells the user they've won or lost and applies the appropriate style
	gameOver(status) {
		const gameOverMsg = document.querySelector('#game-over-message');
		//overlay.classList.remove('start');
		overlay.style.visibility = 'visible';
		if (status === 'loss') {
			gameOverMsg.innerText = 'Game over, try again?';
			overlay.classList.remove('win');
			overlay.classList.add('lose');
		} else {
			gameOverMsg.innerText = 'Congratulations! Play again?';
			overlay.classList.remove('lose');
			overlay.classList.add('win');
		}
	}
}
