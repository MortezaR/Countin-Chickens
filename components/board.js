
const Tile = require('./tile')
const {easy_deck, hard_deck, diff_deck, harder_deck, sum_deck, sprites} = require('./util');

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
        this.calcThings = true;
        this.newBoard(3);
    }
    newBoard(difficulty = 1){

        let keys;
        let tDeckLen;
        let promptCardsDeck;
        if(difficulty  === 1){
            keys = Object.keys(easy_deck);
            tDeckLen = Object.keys(easy_deck).length;
            promptCardsDeck = sum_deck;
        }else if(difficulty === 2){
            keys = Object.keys(hard_deck);
            tDeckLen = Object.keys(hard_deck).length;
            promptCardsDeck = diff_deck;
        }else{
            keys = Object.keys(harder_deck);
            tDeckLen = Object.keys(harder_deck).length;
            promptCardsDeck = diff_deck;
        }
        const gridSize = this.grid.length * this.grid[0].length;
        for (let i = 0; i < gridSize; i++) {
            let key = Math.floor(Math.random() * (tDeckLen-i));
            console.log(key);
            this.grid[i%this.grid.length][Math.floor(i/this.grid.length)].key = keys[key];
            [keys[key], keys[tDeckLen-i-1]] = [keys[tDeckLen-i-1], keys[key]];
        }
        while (this.promptCards.length < 3){
            let val = Math.floor(Math.random() * Object.keys(promptCardsDeck).length);
            let keys = Object.keys(promptCardsDeck);
            let answer = 0;
            if(!this.promptCards.includes(val)){
                this.promptCards.push(keys[val])
                let pCard = promptCardsDeck[keys[val]].values;
                for(let i = 0; i < pCard.length; i++){
                    console.log('prompt card length is', this.promptCards.length);
                    // if (keys[val][0] === 'd'){
                    //     debugger;
                    // }
                    if (keys[val][0] !== 'd' || i === 0){
                        answer += this.calculate(pCard[i].type, pCard[i].color);
                        console.log('i is ', i, 'answer is ', answer, 'we added btw');
                    }else{
                        answer -= this.calculate(pCard[i].type, pCard[i].color);
                        console.log('i is ', i, 'answer is ', answer, 'we subrtacted btw');
                    }
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
        sprites[this.promptCards[0]].drawRotated(ctx, 0, 0, 0.15, 0.15);
    }
    calculate(type, color){
        retVal = 0;
        if(this.calcThings === true){
            for (let i = 0; i < this.grid.length; i++) {
                for (let j = 0; j < this.grid[i].length; j++) {
                    let t = harder_deck[this.grid[i][j].key];
                    if(t[1].value === 0){
                        switch (t[1].direction) {
                            case 'horizontal':
                                for (let k = 0; k < this.grid[i].length; k++) {
                                    this.grid[k][j].multiplier[t[1].color] *= t[1].amount;
                                }
                                break;
                            case 'vertical':
                                for (let k = 0; k < this.grid.length; k++) {
                                    this.grid[i][k].multiplier[t[1].color] *= t[1].amount;
                                }
                                break;
                            case 'diagonal1':
                                for (let k = 0; k < this.grid.length-(Math.abs(i-j)); k++) {
                                    if(i>j){
                                        this.grid[k + (i - j)][k].multiplier[t[1].color] *= t[1].amount;
                                    }else{
                                        this.grid[k][k + (j - i)].multiplier[t[1].color] *= t[1].amount;
                                    }
                                }
                                break;
                            case 'diagonal2':
                                let u = i+j;
                                for (let k = 0; k < u+1; k++) {
                                    if (typeof this.grid[u-k] === 'undefined' || typeof this.grid[u-k][k] === 'undefined') {
                                    }else{
                                        this.grid[u-k][k].multiplier[t[1].color] *= t[1].amount;
                                    }
                                }
                                break;
                            default:
                                break;
                        }  
                    }
                    // console.log(this.grid[i][j]);
                }
            }
            this.calcThings = false;
        }
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let t = harder_deck[this.grid[i][j].key];
                let tileVal = 0;
                for(let k = 1; k <= Object.keys(t).length; k++){
                    if(t[k].value === 0){
                        
                    }else if (t[k].value !== 0
                    && (t[k].type === type || t[k].type === 'wild' || type === 'wild') 
                    && (t[k].color === color || t[k].color === 'black' || color === 'black')){
                        tileVal += t[k].value * this.grid[i][j].multiplier[color];
                        
                        if(color !== 'black'){
                            tileVal *= this.grid[i][j].multiplier.black;
                        }
                    }
                }
                retVal += tileVal;
            }
        }
        return retVal;
    }
}

module.exports = Board;