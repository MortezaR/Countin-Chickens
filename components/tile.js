const {sprites} = require('./util')
class Tile {
    constructor(x, y, key = 1){
        this.x = x;
        this.y = y;
        this.key = key;
        this.multipliers = {}
    }

    draw(ctx){
        sprites[this.key].draw(ctx, this.x, this.y, 0.15, 0.15)
    }
}

module.exports = Tile;