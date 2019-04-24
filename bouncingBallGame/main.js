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
    pen.stroke();
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

let bricks = [] ;

function  createWall() {
    for(let i = 0; i < 10; i++){
        bricks.push(new Brick(i*canvas.width*0.1,20,canvas.width*0.1 - 10,20));
    }
}

createWall();

function isBallCollideHorizontal(ball,brick){

    if ( ((brick.y + brick.height <= ball.y) && (ball.y <= brick.y + brick.height + ball.radius)) || ( (brick.y >= ball.y) && (ball.y >= brick.y - ball.radius) )) {
        if(ball.x < brick.x){
            if(ball.x + ball.radius > brick.x)
                return true;
        }else  if (ball.x > brick.x + brick.width) {
            if(ball.x - ball.radius < brick.x + brick.width)
                return  true;
        }

        if((ball.x >= brick.x) &&(ball.x <= brick.x +brick.width))
            return  true;
    }
    return false;
}

function isBallCollideVerticle(ball,brick){
    if (( (ball.x >= brick.x + brick.width) && (ball.x <= brick.x + brick.width + ball.radius)) || ( (ball.x <= brick.x) && (ball.x >= brick.x - ball.radius))){
        if(ball.y < brick.y){
            if(ball.y + ball.radius > brick.y)
                return true;
        }else  if (ball.y > brick.y + brick.height) {
            if(ball.y - ball.radius < brick.y + brick.height)
                return  true;
        }

        if((ball.y >= brick.y) &&(ball.y <= brick.y +brick.height))
            return  true;
    }

    return false;
}

//alert(bricks.length);

function drawGame() {
    drawCircle(ball);
    drawRectangle(bar);

    for(let brick of bricks){
        drawRectangle(brick);
    }
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

    if(bricks.length === 0){
        alert("YOU WIN!!!");
        clearInterval(motion);
        return;
    }

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
        if(keyLeft && (ball.speedX > 0)){
            ball.speedX = -1.1*ball.speedX;
            keyLeft = false;
        }

        if(keyRight && (ball.speedX < 0)){
            ball.speedX = -1.1*ball.speedX;
            keyLeft = false;
        }
        ball.speedY = -1.1*ball.speedY;
    }

    for(let i = 0;i < bricks.length;i++) {
        if (isBallCollideVerticle(ball, bricks[i])) {

            if(Math.sqrt((ball.x - (bricks[i].x + bricks[i].width)) * (ball.x - (bricks[i].x + bricks[i].width))  +
                (ball.y - (bricks[i].y + bricks[i].height)) * (ball.y - (bricks[i].y + bricks[i].height))  ) > ball.radius )
            {
                ball.speedY = -ball.speedY;
            }

            if(Math.sqrt((ball.x - (bricks[i].x + bricks[i].width)) * (ball.x - (bricks[i].x + bricks[i].width))  +
                (ball.y - (bricks[i].y)) * (ball.y - (bricks[i].y))  ) > ball.radius )
            {
                ball.speedY = -ball.speedY;
            }

            if(Math.sqrt((ball.x - (bricks[i].x)) * (ball.x - (bricks[i].x))  +
                (ball.y - (bricks[i].y + bricks[i].height)) * (ball.y - (bricks[i].y + bricks[i].height))  ) > ball.radius )
            {
                ball.speedY = -ball.speedY;
            }

            if(Math.sqrt((ball.x - (bricks[i].x)) * (ball.x - (bricks[i].x))  +
                (ball.y - (bricks[i].y)) * (ball.y - (bricks[i].y))  ) > ball.radius )
            {
                ball.speedY = -ball.speedY;
            }
            ball.speedX = -ball.speedX;
        }

        if (isBallCollideHorizontal(ball, bricks[i])) {
            bricks.splice(i,1);
            ball.speedY = -ball.speedY;
        }
    }

    ball.x += ball.speedX * (Math.random() + 1);
    ball.y += ball.speedY * (Math.random() + 1);
}

window.addEventListener("keydown", play, false);
window.addEventListener("keyup", play, false);



let keys = [];

let keyLeft;
let keyRight;

function play(e) {

    //pen.clearRect(0, 0, canvas.width, canvas.height);
    // store an entry for every key pressed
    keys[e.keyCode] = true;

    keyLeft = false;
    keyRight = false;

    // left
    if (keys[37]) {
        keyLeft = true;
        keyRight = false;
        bar.moveLeft();
    }

    // right
    if (keys[39]) {
        keyLeft = false;
        keyRight = true;
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

let motion = setInterval(start,0.2);






