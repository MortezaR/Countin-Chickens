// const Circle = require("./circle.js");
const Board = require('./board');
// const circles = [];

class Game {
    constructor(){
        this.board = new Board(4,4);
        this.score = 0;
    }
    draw(canvasEl){
        const ctx = canvasEl.getContext("2d");
        this.board.draw(ctx);
    }
    guess(num){
        if(num == this.board.answer){
            this.score += 1;
            this.board.currentCardNum += 1;
            if(this.board.currentCardNum < 3){
                this.board.generateCard();
            }else{
                this.board.newBoard(2);
                this.board.currentCardNum = 0;
            }
        }
    }
}

module.exports = Game;
