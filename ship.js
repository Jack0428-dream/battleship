//object that include their length, the number of times 
// they've been hit and whether or not they've been sunk 
class Ship {
    //hit() - that increased the number of 'hits' in your ship
    //isSunk() - calculates whether a ship is considered sunk based on its length 
    // and the number of hits it has received.
    constructor() {
        this.carrier = new Array(5).fill(null);
        this.battleship = new Array(4).fill(null);
        this.destroyer = new Array(3).fill(null);
        this.submarine = new Array(3).fill(null);
        this.patrol = new Array(2).fill(null);
    }

    hit(arr) {
        // add hit 
        // do not exceed the length of array
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === null) {
                arr[i] = "hit";
                break;
            }
        }
        return "this ship is sunk"
    }

    isSunk(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] !== "hit") {
                return false
            }
        }
        return true;
    }
}

module.exports = Ship;