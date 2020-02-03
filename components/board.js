
const Tile = require('./tile')
const SHAPES = ['circle', 'square', 'triangle', 'wild'];
const COLORS = ['red', 'blue', 'green', 'wild'];

class Board {
    constructor(width, height){
        this.grid = new Array(width);
        this.multiTiles = [];
        for (let i = 0; i < width; i++) {
            this.grid[i] = new Array(height);
        }
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                this.grid[i][j] = new Tile(i*100 + 300, j*100 + 300);
            }
        }
        this.currentCard = null;
        this.currentCardNum = 0;
        this.answer = null;
        this.newBoard(2);
    }
    newBoard(numMultiTiles){
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let t = this.grid[i][j];
                t.randomizeTile();
            }
        }
        for(let i = 0; i< numMultiTiles; i++){
            let x = Math.floor(Math.random() * this.grid.length);
            let y = Math.floor(Math.random() * this.grid[x].length);
            let dir = Math.ceil(Math.random() * 2);
            let amount = Math.floor(Math.random() * 3);
            let color = COLORS[Math.floor(Math.random() * COLORS.length)];
            switch (amount) {
                case 0:
                    amount = -1;
                    break;
                case 1:
                    amount = 2;
                    break;
                case 2:
                    amount = 3;
                    break;
                default:
                    break;
            }
            this.addMultiTile(x, y, amount, dir === 1 ? 'vertical' : 'horizontal', color);
        }
        this.generateCard();
    }
    draw(ctx){
        ctx.fillStyle = "#000000";
        ctx.font = "50px Arial";
        ctx.fillText(this.currentCard.equation === 'sum' ? 'sum': 'diff' ,
        this.currentCard.first.x, this.currentCard.first.y -30);

        this.currentCard.first.draw(ctx);
        this.currentCard.second.draw(ctx);
        for(let i = 0; i < this.grid.length; i++){
            for (let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j].draw(ctx);
            }
        }
    }
    calculate(shape, color){
        retVal = 0;
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let t = this.grid[i][j];
                if ((t.shape === shape || t.shape === 'wild' || shape === 'wild') 
                && (t.color === color || t.color === 'wild' || color === 'wild')){
                    retVal += t.value * t.multi;
                }
            }
        }
        return retVal;
    }
    addMultiTile(x, y, amount, dir, color ){
        this.grid[x][y].makeMultiTile(amount, dir, color);
        if(dir === 'vertical'){
            for(let j = 0; j< this.grid[0].length; j++){
                if (this.grid[x][j].color === color || color === 'wild'){
                    this.grid[x][j].multi *= amount;
                }
            }
        }else if( dir === 'horizontal'){
            for (let i = 0; i < this.grid[0].length; i++) {
                if (this.grid[i][y].color === color || color === 'wild'){
                    this.grid[i][y].multi *= amount;
                }
            }
        }
    }
    generateCard(){
        let equ = Math.ceil(Math.random() * 2);
        let shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
        let color = COLORS[Math.floor(Math.random() * COLORS.length)];
        let shape2 = SHAPES[Math.floor(Math.random() * SHAPES.length)];
        let color2 = COLORS[Math.floor(Math.random() * COLORS.length)];
        if(equ === 1){
            this.answer = Math.abs(this.calculate(shape, color) - this.calculate(shape2, color2))
        } else if(equ === 2){
            this.answer = Math.abs(this.calculate(shape, color) + this.calculate(shape2, color2))
        }
        console.log('this is the actual answer -=> ', this.answer);
        this.currentCard = {
        equation: equ === 1 ? 'difference' : 'sum',
        first: new Tile(350, 100, {shape: shape, color: color}),
        second: new Tile(450, 100, { shape: shape2, color: color2 })};
    }
}


// dir vertical -> all similar j values
// dir horizontal -> all similar i values

module.exports = Board;