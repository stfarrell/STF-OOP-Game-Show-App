/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const phraseContainer = document.querySelector('#phrase > ul');

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	addPhraseToDisplay() {
		for (let i = 0; i < this.phrase.length; i++) {
			const newLetter = document.createElement('li');
			if (this.phrase[i] === ' ') {
				newLetter.classList.add('space');
			} else {
				newLetter.classList.add('hide', 'letter', `${this.phrase[i]}`);
				newLetter.innerText = `${this.phrase[i]}`;
			}
			phraseContainer.appendChild(newLetter);
		}
	}

	checkLetter(letToCheck) {
		console.log('check');
		if (this.phrase.includes(letToCheck)) {
			this.showMatchedLetter(letToCheck);
		} else {
			return false;
		}
	}

	showMatchedLetter(letToShow) {
		const letters = phraseContainer.children;
		for (let letter of letters) {
			if (letter.innerText === letToShow) {
				letter.classList.remove('hide');
				letter.classList.add('show');
				// return true;
			}
		}
	}
}
