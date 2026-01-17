// should be able to place ships at specific coordinates 
// by calling the ship factory or class

// should have a "receiveAttack" function that takes a pair of coordinates
// determines whether or not the attack hit a ship and then sends the 'hit'
// function to the correct shipt, or records the coordinates of the missed shot

// should keep track of missed attacks -> can display them properly

// should be able to report whether or not all of their ships have been sunk

class Gameboard{
    constructor() {
        // how to keep track of missed attacks?

    }

    placeShip(ship, coordinates, side = 'h') {
        // should be able to place ships at specific coordinates by calling 
        // this ship class
        let placed = [];

        if(side === 'h') {
            if((ship.length + coordinates[0]) > 10) {
                for(let i = 0; i < ship.length; i++) {
                    placed.push([coordinates[0]-i, coordinates[1]])
                }
            } else {
                for(let i = 0; i < ship.length; i++) {
                    placed.push([coordinates[0]+i, coordinates[1]])
                }
            }
        } else if(side === 'v') {
            if((ship.length + coordinates[1]) > 10) {
                for(let i = 0; i < ship.length; i++) {
                    placed.push([coordinates[0], coordinates[1]-i])
                }
            } else {
                for(let i = 0; i < ship.length; i++) {
                    placed.push([coordinates[0], coordinates[1]+i])
                }
            }
        }
        
        return placed;
    }

    receiveAttack() {
        // takes a pair of coordinates
        // determines whether or not the attack hit a ship 
        // sends the 'hit' function to the correct ship
        // or records the coordinates of the missed shot
    }

    // keep track of missed attacks so they can display them properly 

    report() {

    }
}

module.exports = Gameboard;