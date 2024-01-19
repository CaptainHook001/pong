
const ball = document.getElementById('ball');
const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');

let ballX = 300;
let ballY = 200;
let ballSpeedX = 5;
let ballSpeedY = 5;

function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Check collision with top and bottom walls
    if (ballY < 0 || ballY > 380) {
        ballSpeedY = -ballSpeedY;
    }

    // Check collision with paddles
    if (
        (ballX < 35 && ballX > 25 && ballY > leftPaddle.offsetTop && ballY < leftPaddle.offsetTop + 100) ||
        (ballX > 565 && ballX < 575 && ballY > rightPaddle.offsetTop && ballY < rightPaddle.offsetTop + 100)
    ) {
        ballSpeedX = -ballSpeedX;
    }

    // Check if ball is out of bounds
    if (ballX < 0 || ballX > 600) {
        resetBall();
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

function resetBall() {
    ballX = 300;
    ballY = 200;
}

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
