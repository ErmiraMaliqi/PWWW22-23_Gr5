// Get the canvas and buttons from the HTML
const canvas = document.getElementById('gameCanvas');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const restartButton = document.getElementById('restartButton');

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
});

// Set up a variable to store the snake's movement direction
let snakeDirection = 'up';

// Add an event listener for the keydown event
document.addEventListener('keydown', (event) => {
    // Check the key code of the key that was pressed
    if (event.keyCode === 37) {
        // Left arrow key was pressed, set the direction to left
        snakeDirection = 'left';
    } else if (event.keyCode === 38) {
        // Up arrow key was pressed, set the direction to up
        snakeDirection = 'up';
    } else if (event.keyCode === 39) {
        // Right arrow key was pressed, set the direction to right
        snakeDirection = 'right';
    } else if (event.keyCode === 40) {
        // Down arrow key was pressed, set the direction to down
        snakeDirection = 'down';
    }
});

// Set up some variables to store the state of the game
let isRunning = false;
let isPaused = false;

// Add an event listener for the start button
startButton.addEventListener('click', () => {
    // Start the game
    isRunning = true;
    isPaused = false;
});

// Add an event listener for the pause button
pauseButton.addEventListener('click', () => {
    // Pause the game
    isPaused = true;
});

// Set up some variables to store the position and size of the snake
let snakeX = canvas.width / 2;
let snakeY = canvas.height / 2;
let snakeSize = 20;

// Set up a function to draw the snake on the canvas
function drawSnake() {
    // Get the canvas context
    const ctx = canvas.getContext('2d');

    // Set the fill color to green
    ctx.fillStyle = 'green';

    // Draw the snake as a rectangle at the current position
    ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);
}

// Set up a function to update the snake's position
function updateSnake() {
    // Update the position based on the direction the snake is moving
    if (snakeDirection === 'up') {
        snakeY -= snakeSize;
    } else if (snakeDirection === 'down') {
        snakeY += snakeSize;
    } else if (snakeDirection === 'left') {
        snakeX -= snakeSize;
    } else if (snakeDirection === 'right') {
        snakeX += snakeSize;
    }

    // Keep the snake on the canvas by wrapping it around to the other side when it goes off the edge
    if (snakeX > canvas.width) {
        snakeX = 0;
    } else if (snakeX < 0) {
        snakeX = canvas.width;
    }
    if (snakeY > canvas.height) {
        snakeY = 0;
    } else if (snakeY < 0) {
        snakeY = canvas.height;
    }
}

// Set up a function to clear the canvas
function clearCanvas() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Add an event listener for the restart button
restartButton.addEventListener('click', () => {
    // Reset the game
    isRunning = false;
    isPaused = false;
    snakeX = canvas.width / 2;
    snakeY = canvas.height / 2;
    snakeDirection = 'up';

    // Clear the canvas
    clearCanvas();
});

// Set up a function to run the game loop
function gameLoop() {
    // If the game is running and not paused, update the snake and draw it on the canvas
    if (isRunning && !isPaused) {
        updateSnake();
        drawSnake();
    }

    // Run the game loop again at the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
