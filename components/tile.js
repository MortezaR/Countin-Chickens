
const Sprite = require('./sprite')
const SHAPES = ['circle', 'square', 'triangle', 'wild'];
const COLORS = ['red', 'blue', 'green', 'wild'];
const MAXVALUE = 3;
class Tile {
    constructor(x, y, values = {shape: 'wild', color: 'wild', value: 1, multi: 1,
     multiplier:{amount:null, dir: null, color: null}} ){
        this.sprites = {
            circle: new Sprite('https://i.imgur.com/ZHrywdO.png', 256, 256, 1),
            square: new Sprite('https://i.imgur.com/mW3JUfc.gif', 256, 256, 1),
            triangle: new Sprite('https://i.imgur.com/JZlvzMc.png', 1000, 1000, 1),
            wild: new Sprite('https://i.imgur.com/f0z68qE.png', 35, 35, 1)
        }
        this.height = 75;
        this.width = 75;
        this.x = x;
        this.y = y;

        this.shape = values.shape;
        this.color = values.color;
        this.value = values.value;

        this.multiplier = values.multiplier;
        this.multi = values.multi;
    }

    draw(ctx){
        // ctx = ctx.getContext('2d');
        switch (this.color || this.multiplier.color) {
            case 'red':
                ctx.fillStyle = "#FF0000";
                break;
            case 'blue':
                ctx.fillStyle = "#0000FF";
                break;
            case 'green':
                ctx.fillStyle = "#00FF00";
                break;
            case 'wild':
                ctx.fillStyle = "#000000";
                break;
            default:
                ctx.fillStyle = "#000000";
                break;
        }
        switch (this.shape) {
            case 'circle':
                // this.sprites.circle.drawFFrame(ctx, this, 0, 0, .3, .3);
                ctx.beginPath();
                ctx.arc(this.x + this.height / 2, this.y + this.height / 2, this.height/2, 0, 2 * Math.PI);
                ctx.fill();
                // ctx.fillRect(this.x, this.y, this.width, this.height);
                break;
            case 'square':
                // this.sprites.square.drawFFrame(ctx, this, 0, 0, .3, .3);
                ctx.fillRect(this.x, this.y, this.width, this.height);
                break;
            case 'triangle':
                // this.sprites.triangle.drawFFrame(ctx, this, 0, 0, .1, .1);
                // ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.beginPath();
                ctx.moveTo(this.x + this.width/2, this.y);
                ctx.lineTo(this.x, this.y+this.height);
                ctx.lineTo(this.x+this.width, this.y + this.height);
                ctx.closePath();
                ctx.fill();
                break;
            case 'wild':
                // this.sprites.wild.drawFFrame(ctx, this, 0, 0, 3, 3);
                ctx.beginPath();
                ctx.moveTo(this.x + this.width / 2, this.y);
                ctx.lineTo(this.x, this.y + this.height * 3 / 4);
                ctx.lineTo(this.x + this.width, this.y + this.height * 3 / 4);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(this.x + this.width / 2, this.y + this.height);
                ctx.lineTo(this.x, this.y + this.height/4);
                ctx.lineTo(this.x + this.width, this.y + this.height / 4);
                ctx.closePath();
                ctx.fill();
                break;
            case null:
                // this.sprites.wild.drawFFrame(ctx, this, 0, 0, 3, 3);
                // ctx.fillRect(this.x, this.y, this.width, this.height);

                if(this.multiplier.dir === 'vertical'){
                    ctx.beginPath();
                    ctx.moveTo(this.x + this.width / 2, this.y);
                    ctx.lineTo(this.x, this.y + this.height / 4);
                    ctx.lineTo(this.x + this.width, this.y + this.height / 4);
                    ctx.closePath();
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(this.x + this.width / 2, this.y + this.height);
                    ctx.lineTo(this.x, this.y + this.height *3/ 4);
                    ctx.lineTo(this.x + this.width, this.y + this.height *3/ 4);
                    ctx.closePath();
                    ctx.fill();
                }else{
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y + this.height / 2);
                    ctx.lineTo(this.x + this.width / 4, this.y );
                    ctx.lineTo(this.x + this.width / 4, this.y + this.height );
                    ctx.closePath();
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(this.x + this.width, this.y + this.height / 2);
                    ctx.lineTo(this.x + this.width*3 / 4, this.y );
                    ctx.lineTo(this.x + this.width *3 / 4, this.y + this.height);
                    ctx.closePath();
                    ctx.fill();
                }
            default:
                break;
        }if(this.value){
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "30px Arial";
            ctx.fillText(this.value, this.x +this.width/2 - 7.5, this.y +this.height/2 + 9);
        }else if(this.multiplier){
            ctx.fillStyle = "#000000";
            ctx.font = "30px Arial";
            ctx.fillText(this.multiplier.amount, this.x + this.width / 2 - 7.5, this.y + this.height / 2 + 9);
        }
    }
    makeMultiTile(amount, dir, color){
        this.shape = null;
        this.value = null;
        this.color = null;
        this.multi = null;

        this.multiplier.amount = amount;
        this.multiplier.dir = dir;
        this.multiplier.color = color;
    }
    randomizeTile(){
        this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.value = Math.ceil(Math.random() * MAXVALUE);
        // console.log(this.shape, this.color, this.value);
    }
}

module.exports = Tile;