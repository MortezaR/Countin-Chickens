
const Tile = require('./tile')
const {easy_deck, hard_deck, sum_deck, sprites} = require('./util');

class Board {
    constructor(width, height){
        this.grid = new Array(width);
        for (let i = 0; i < width; i++) {
            this.grid[i] = new Array(height);
        }
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                this.grid[i][j] = new Tile(i*101.25 + 600, j*157.5);
            }
        }
        this.promptCards = [];
        this.answers = [];
        this.newBoard();
    }
    newBoard(){
        let keys = Object.keys(easy_deck);
        let tDeckLen = Object.keys(easy_deck).length;
        const gridSize = this.grid.length * this.grid[0].length;
        for (let i = 0; i < gridSize; i++) {
            let key = Math.floor(Math.random() * (tDeckLen-i));
            console.log(key);
            this.grid[i%this.grid.length][Math.floor(i/this.grid.length)].key = keys[key];
            [keys[key], keys[tDeckLen-i-1]] = [keys[tDeckLen-i-1], keys[key]];
        }
        while (this.promptCards.length < 3){
            let val = Math.floor(Math.random() * Object.keys(sum_deck).length);
            let keys = Object.keys(sum_deck);
            let answer = 0;
            if(!this.promptCards.includes(val)){
                this.promptCards.push(keys[val])
                let pCard = sum_deck[keys[val]].values;
                for(let i = 0; i < pCard.length; i++){
                    answer += this.calculate(pCard[i].type, pCard[i].color);
                }
                this.answers.push(answer);
                console.log('answer -> ', answer);
            }
        }
    }
    draw(ctx){
        for(let i = 0; i < this.grid.length; i++){
            for (let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j].draw(ctx);
            }
        }
        sprites[this.promptCards[0]].draw(ctx, 0, 0, 0.15, 0.15);
    }
    calculate(type, color){
        retVal = 0;
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let t = hard_deck[this.grid[i][j].key];
                // debugger;
                for(let k = 1; k <= Object.keys(t).length; k++){
                    if ((t[k].type === type || t[k].type === 'wild' || type === 'wild') 
                    && (t[k].color === color || t[k].color === 'black' || color === 'black')){
                        retVal += t[k].value;
                    }
                }
            }
        }
        return retVal;
    }
}


// dir vertical -> all similar j values
// dir horizontal -> all similar i values

module.exports = Board;