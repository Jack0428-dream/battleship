const Ship = require('./ship')

class Gameboard{
    constructor() {
        // how to keep track of missed attacks?
        // instance of Ship class
        this.playerShip = new Ship;
        this.missed = [];
        this.ships = {};
    }

    placeShip(ship, coordinates, side = 'h') {
        // should be able to place ships at specific coordinates by calling 
        // this ship class
        let placed = [];

        if(side === 'h') {
            if((ship.length + coordinates[1]) > 10) {
                for(let i = 0; i < ship.length; i++) {
                    placed.push([coordinates[0], coordinates[1]-i])
                }
            } else {
                for(let i = 0; i < ship.length; i++) {
                    placed.push([coordinates[0], coordinates[1] + i])
                }
            }
        } else if(side === 'v') {
            if((ship.length + coordinates[0]) > 10) {
                for(let i = 0; i < ship.length; i++) {
                    placed.push([coordinates[0]-i, coordinates[1]])
                }
            } else {
                for(let i = 0; i < ship.length; i++) {
                    placed.push([coordinates[0]+i, coordinates[1]])
                }
            }
        }
        
        // comparing placed coordinates and ships object
        for(let key in this.ships) {
            for(let item of this.ships[key]) {
                for(let i = 0; i < placed.length; i++) {
                    if(item[0] === placed[i][0] && item[1] === placed[i][1]) {
                        return false;
                    }
                }
            }
        }

        if(ship === this.playerShip.carrier) {
            this.ships.carrier = placed;
            return true;
        } else if(ship === this.playerShip.battleship) {
            this.ships.battleship = placed;
            return true;
        } else if(ship === this.playerShip.destroyer) {
            this.ships.destroyer = placed;
            return true;
        } else if(ship === this.playerShip.submarine) {
            this.ships.submarine = placed;
            return true;
        } else if(ship === this.playerShip.patrol) {
            this.ships.patrol = placed;
            return true;
        }
    }

    receiveAttack(coord) {
        // see if the ships obj has the ship that's placed
        // in given coor, if it does, send a signal to the same ship 
        // if it doesn't record the coord to missed 
        for(key in this.ships) {
            // key is string it is not the array itself. 
            this.ships[key].forEach(item => {
                if(coord[0] === item[0] && coord[1] === item[1]) {
                    // send a signal to the same ship
                    this.playerShip.hit(this.playerShip[key]);
                    // key is string how to unstring it?
                    // change the design. that I don't have to think about unstring someting to use it.
                    return;
                }
            })
        }
        
        this.missed.push(coord);
    }
 
    report() {
        for(key in this.ships) {
            if(this.playerShip.isSunk(this.placeShip[key]) === false) {
                return 'Game is still going!'
            }
        }

        return 'Ships are all gone, Game Over'
    }
}

module.exports = Gameboard;