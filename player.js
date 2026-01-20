const Gameboard = require('./gameboard');
const Ship = require('./ship')

class Player{
    constructor() {
        this.type = 'human'
        this.board = new Gameboard;
    }

    set typeChange(string) {
        this.type = string;
    }
}

module.exports = Player;