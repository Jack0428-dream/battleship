const Gameboard = require('./gameboard');
const Ship = require('./ship')
test('check if the ship has placed successfully',() => {
    const shipTest1 = new Ship;
    const boardTest1 = new Gameboard;

    expect(boardTest1.placeShip(shipTest1.carrier, [4, 5])).toEqual([[4, 5], [5, 5], [6, 5], [7, 5], [8, 5]])
})

test('check if the ship has placed successfully',() => {
    const shipTest1 = new Ship;
    const boardTest1 = new Gameboard;

    expect(boardTest1.placeShip(shipTest1.submarine, [4, 5], 'v')).toEqual([[4, 5], [4, 6], [4, 7]])
})

test('check if the ship has placed successfully',() => {
    const shipTest1 = new Ship;
    const boardTest1 = new Gameboard;

    expect(boardTest1.placeShip(shipTest1.destroyer, [9, 5])).toEqual([[9, 5], [8, 5], [7, 5]])
})

test('check if the ship has placed successfully',() => {
    const shipTest1 = new Ship;
    const boardTest1 = new Gameboard;

    expect(boardTest1.placeShip(shipTest1.patrol, [2, 8], 'v')).toEqual([[2, 8], [2, 9]])   
    // expect(boardTest1.placeShip(shipTest1.patrol, [2, 8], 'v')).toHaveLength(2);
    // expect(boardTest1.placeShip(shipTest1.patrol, [2, 8], 'v')).toEqual(expect.arrayContaining([[2, 9], [2, 8]]))
})

test('check if the ship has placed successfully',() => {
    const shipTest1 = new Ship;
    const boardTest1 = new Gameboard;

    expect(boardTest1.placeShip(shipTest1.battleship, [7, 5])).toEqual([[7, 5], [6, 5], [5, 5], [4, 5]])
})