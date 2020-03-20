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
        if(num == this.board.answers[0]){
            this.score += 1;
            this.board.answers.shift();
            this.board.promptCards.shift();
            if(this.board.promptCards < 1){
                this.board.newBoard();
            }else{
                // this.board.drawPromptCard(canvasEl);
            }
        }
    }
}

module.exports = Game;
