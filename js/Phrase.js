/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const phraseContainer = document.querySelector('#phrase > ul');

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	//Adds a random phrase from the array to display on the page
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

	//Checks to see if the phrase includes the letter that was just clicked
	checkLetter(letToCheck) {
		if (this.phrase.includes(letToCheck)) {
			return true;
		} else {
			return false;
		}
	}

	//If the phrase contains the guessed letter, show that letter within the phrase.
	showMatchedLetter(letToShow) {
		const letters = phraseContainer.children;
		for (let letter of letters) {
			if (letter.innerText === letToShow) {
				letter.classList.remove('hide');
				letter.classList.add('show');
			}
		}
	}
}
