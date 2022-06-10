/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let newGame;
const allBtns = document.querySelectorAll('.key');

//Initialize the game with 5 phrase objects
startBtn.addEventListener('click', (e) => {
	resetGame();
	newGame = new Game(
		0,
		[
			new Phrase('grape'),
			new Phrase('grapefruit'),
			new Phrase('pine apple'),
			new Phrase('watermelon'),
			new Phrase('apple'),
		],
		null
	);
	newGame.startGame();
});

//Click the buttons => Start the letter-checking process
for (btn of allBtns) {
	btn.addEventListener('click', (e) => {
		newGame.handleInteraction(e.target);
	});
}

//Type the buttons => Start the letter-checking process
window.addEventListener('keypress', (e) => {
	for (btn of allBtns) {
		if (e.key === btn.innerText && btn.disabled === false) {
			newGame.handleInteraction(btn);
		}
	}
});

//Reset the game.
function resetGame() {
	blurCount = 0;
	body.style.filter = `blur(${blurCount}px)`;
	while (phraseContainer.firstChild) {
		phraseContainer.removeChild(phraseContainer.firstChild);
	}

	for (btn of allBtns) {
		btn.classList.remove('chosen', 'wrong');
		btn.disabled = false;
	}

	const heartContainers = document.querySelectorAll('#scoreboard > ol > li');
	for (let heartContainer of heartContainers) {
		heartContainer.firstChild.src = 'images/fire.gif';
	}
}
