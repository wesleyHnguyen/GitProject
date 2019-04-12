let numberRows = parseInt(prompt("Enter number of rows: "));
let numberCols = parseInt(prompt("Enter number of columns"));


function play(x, y) {
    gameBoard.play(x, y);
}

function start() {
    gameBoard = new GameBoard(numberRows, numberCols, "boardField");
    gameBoard.drawBoard();
}
let gameBoard;

start();