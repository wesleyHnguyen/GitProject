const canvas = document.getElementById("myCanvas");
const pen = canvas.getContext("2d");


function drawCircle(circle) {
    pen.beginPath();
    pen.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    pen.fillStyle = "red";
    pen.fill();
    pen.closePath();

}

function drawRectangle(rect) {
    pen.beginPath();
    pen.rect(rect.x, rect.y, rect.width, rect.height);
    pen.fillStyle = "blue";
    pen.fill();
    pen.closePath();
}

let x = canvas.width/2;
let y = canvas.height/2;
let radius = 15;
let ball = new Ball(x,y,radius);

let rectX = 50;
let rectY = canvas.height - 50;
let width = 95;
let height = 20;
let bar = new Bar(rectX,rectY,width,height);


function drawGame() {
    drawCircle(ball);
    drawRectangle(bar);
}



function isGameOver() {
    let result = false;
    if (ball.y + ball.speedY > canvas.height - ball.radius)
       result = true;

    return result;
}


function start(){
    pen.clearRect(0, 0, canvas.width, canvas.height);
    drawGame();

    if(isGameOver()){
        alert("Game Over!!!");
        clearInterval(motion);

        return;
    }


    if (ball.y + ball.speedY - ball.radius < 0) {
        ball.speedY = -ball.speedY;
    }

    if (ball.x + ball.speedX > canvas.width - ball.radius || ball.x - ball.radius + ball.speedX < 0) {
        ball.speedX = -ball.speedX;
    }

    if (ball.isCollideTheBar(bar)){
        ball.speedY = -ball.speedY;
    }

    ball.x += ball.speedX * (Math.random() + 1);
    ball.y += ball.speedY * (Math.random() + 1);
}


window.addEventListener("keydown", play, false);
window.addEventListener("keyup", play, false);

let keys = [];

function play(e) {

    //pen.clearRect(0, 0, canvas.width, canvas.height);
    // store an entry for every key pressed
    keys[e.keyCode] = true;

    // left
    if (keys[37]) {
        bar.moveLeft();
    }

    // right
    if (keys[39]) {
        bar.moveRight();
    }
    e.preventDefault();

    drawRectangle(bar);

    keysReleased(e);
}

function keysReleased(e) {
    // mark keys that were released
    keys[e.keyCode] = false;
}

let motion = setInterval(start,2);






