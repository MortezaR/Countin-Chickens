const {sprites} = require('./util')
class Tile {
    constructor(x, y, key = 1){
        this.x = x;
        this.y = y;
        this.key = key;
        this.multiplier = {black: 1, blue: 1, red: 1, yellow: 1};
    }

    draw(ctx){
        sprites[this.key].draw(ctx, this.x, this.y, 0.15, 0.15)
    }
}

module.exports = Tile;