/*
* source code from codegym
* modified by thanhnh on 12/04/2019
* things modified: algorithm to check who is the winner.
* */



const VALUE_EMPTY = 1;
const VALUE_X = 2;
const VALUE_O = 3;
const DEFAULT_CELL_SIZE = 50;

function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.value = VALUE_EMPTY;

    this.getCell = function(){
        let top = x * DEFAULT_CELL_SIZE;
        let left = y * DEFAULT_CELL_SIZE;
        let cellHtml = '<div id="cell-'+x+'-'+y+'" onclick="play('+x+','+y+')" class="cell" style="position: absolute; width: '+
            DEFAULT_CELL_SIZE+'px; height:'+
            DEFAULT_CELL_SIZE+'px; left:'+
            (left + 200) +'px; top:'+
            (top + 50) +'px; line-height: '+
            DEFAULT_CELL_SIZE+'px;"></div>';
        return cellHtml;
    };

    this.drawCell = function () {
        let idCell = document.getElementById("cell-"+this.x+"-"+this.y);
        switch (this.value) {
            case VALUE_X:
                idCell.innerHTML = "X";
                break;

            case VALUE_O:
                idCell.innerHTML = "O";
                break;

            default:
                idCell.innerHTML = "";
        }
    }
}

function GameBoard(rows,cols,elementId) {
    this.rows = rows;
    this.cols = cols;
    this.elementId = elementId;
    this.turn = VALUE_O;
    this.cells = [];
    this.isOver = false;

    this.drawBoard = function () {
        let gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for(let i = 0; i < this.rows; i++){
            let row = [];
            this.cells.push(row);
            for(let j = 0; j < this.cols; j++){
                let cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getCell();
            }
        }
    };

    this.play = function (x, y) {
        if(this.isOver) {
            return;
        }
        let cell = this.cells[x][y];
        if(cell.value === VALUE_EMPTY){
            cell.value = this.turn;
            cell.drawCell();
            this.check();
            if(this.turn === VALUE_O){
                this.turn = VALUE_X;
            } else {
                this.turn = VALUE_O;
            }
        } else {
            alert("Cell is not empty");
        }
    };

    this.checkRow = function (row,column) {
        let count = 1;
        for(let j=column+1; j < this.cells.length; j++){
            if(this.cells[row][column].value === this.cells[row][j].value){
                count++;
            }
        }
        if (count === 5) return true;
    };

    this.checkColumn = function (row,column) {
        let count = 1;
        for(let i=row+1; i < this.cells.length; i++){
            if(this.cells[row][column].value === this.cells[i][column].value){
                count++;
            }
        }
        if (count === 5) return true;
    };

    this.checkLeftDiagonal = function (row,column) {
        let count = 1;
        for(let i=row+1,j=column+1; (i < this.cells.length) && (j < this.cells.length); i++,j++){
            if(this.cells[row][column].value === this.cells[i][j].value){
                count++;
            }
        }
        if (count === 5) return true;
    };

    this.checkRightDiagonal = function (row,column) {
        let count = 1;
        for(let i=row+1,j=column-1; (i < this.cells.length) && (j >= 0); i++,j--){
            if(this.cells[row][column].value === this.cells[i][j].value){
                count++;
            }
        }
        if (count === 5) return true;
    };

    this.check = function () {

        for(let i = 0; i < this.cells.length; i++)
            for(let j = 0; j < this.cells.length; j++){
                if(this.cells[i][j].value !== VALUE_EMPTY){
                    if(this.checkLeftDiagonal(i,j) || this.checkRightDiagonal(i,j) ||this.checkColumn(i,j) || this.checkRow(i,j))
                    {
                        if (this.cells[i][j].value === VALUE_O) {
                            alert("player 1 WIN!!!");
                            this.isOver = true;
                        }
                        else {
                            alert("player 2 WIN!!!");}
                            this.isOver = true;
                    }
                }

            }
    }
}


