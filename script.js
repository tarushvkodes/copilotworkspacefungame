document.addEventListener('DOMContentLoaded', (event) => {
    const gameContainer = document.createElement('div');
    gameContainer.className = 'game-container';
    document.body.appendChild(gameContainer);

    const title = document.createElement('h1');
    title.textContent = 'Fun Game';
    gameContainer.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'Click the button to start the game!';
    gameContainer.appendChild(description);

    const startButton = document.createElement('button');
    startButton.textContent = 'Start Game';
    gameContainer.appendChild(startButton);

    startButton.addEventListener('click', startGame);

    function startGame() {
        description.textContent = 'Game started! Press any key to play.';
        startButton.style.display = 'none';

        document.addEventListener('keydown', handleKeyPress);
    }

    function handleKeyPress(event) {
        const key = event.key;
        description.textContent = `You pressed: ${key}`;
    }
});
