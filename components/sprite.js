

class Spirte {
    constructor(img, width, height){
        this.loaded = false;
        this.image = new Image();
        this.image.addEventListener('load', () => {
            this.loaded = true;
        }, false);
        this.image.src = img;
        this.height = height;
        this.width = width;
        this.draw = this.draw.bind(this);
    }
    draw(ctx, x, y, hMul = 1, wMul = 1) {
        if(this.loaded){
            ctx.drawImage(
            this.image,
            0,
            0,
            this.width,
            this.height,
            x,
            y,
            this.width * hMul,
            this.height * wMul
            );
        }else{
            setTimeout(() => this.draw(ctx,x,y,hMul,wMul), 100);
        }
        // ctx.beginPath();
        // ctx.arc(x + this.height / 2, y + this.height / 2, this.height/2, 0, 2 * Math.PI);
        // ctx.fill();
    }
    drawRotated(ctx, x, y, hMul = 1, wMul = 1) {
        if(this.loaded){
            ctx.save();
            ctx.translate(200, 200);
            ctx.rotate(Math.PI/2);
            ctx.drawImage(
            this.image,
            0,
            0,
            this.width,
            this.height,
            x,
            y,
            this.width * hMul,
            this.height * wMul
            );
            ctx.restore(); 
        }else{
            setTimeout(() => this.drawRotated(ctx,x,y,hMul,wMul), 100);
        }
        // ctx.beginPath();
        // ctx.arc(x + this.height / 2, y + this.height / 2, this.height/2, 0, 2 * Math.PI);
        // ctx.fill();
    }
}
module.exports = Spirte;