const Gameboard = require('./gameboard');
const Ship = require('./ship')
test('check if the ship has placed successfully',() => {
    const boardTest1 = new Gameboard;
    boardTest1.placeShip(boardTest1.playerShip.carrier, [4, 5])

    expect(boardTest1.ships.carrier).toEqual([[4, 5], [5, 5], [6, 5], [7, 5], [8, 5]])
})

test('check if the ship has placed successfully',() => {
    const boardTest1 = new Gameboard;
    boardTest1.placeShip(boardTest1.playerShip.submarine, [4, 5], 'v')

    expect(boardTest1.ships.submarine).toEqual([[4, 5], [4, 6], [4, 7]])
})

test('check if the ship has placed successfully',() => {
    const boardTest1 = new Gameboard;
    boardTest1.placeShip(boardTest1.playerShip.destroyer, [9, 5])

    expect(boardTest1.ships.destroyer).toEqual([[9, 5], [8, 5], [7, 5]])
})

test('check if the ship has placed successfully',() => {
    const boardTest1 = new Gameboard;
    boardTest1.placeShip(boardTest1.playerShip.patrol, [2, 8], 'v')

    expect(boardTest1.ships.patrol).toEqual([[2, 8], [2, 9]])   
    // expect(boardTest1.placeShip(shipTest1.patrol, [2, 8], 'v')).toHaveLength(2);
    // expect(boardTest1.placeShip(shipTest1.patrol, [2, 8], 'v')).toEqual(expect.arrayContaining([[2, 9], [2, 8]]))
})

test('check if the ship has placed successfully',() => {
    const boardTest1 = new Gameboard;
    boardTest1.placeShip(boardTest1.playerShip.battleship, [7, 5])

    expect(boardTest1.ships.battleship).toEqual([[7, 5], [6, 5], [5, 5], [4, 5]])
})

test('check if the hit signal is working', () => {
    const board1 = new Gameboard;
    board1.placeShip(board1.playerShip.destroyer, [9, 5]);
    board1.receiveAttack([9, 5]);
    board1.receiveAttack([8, 5]);
    board1.receiveAttack([7, 5]);

    expect(board1.playerShip.destroyer[0]).toBe('hit');
    expect(board1.playerShip.destroyer[1]).toBe('hit');
    expect(board1.playerShip.destroyer[2]).toBe('hit');
})

test('check if isSunk is work', () => {
    const board1 = new Gameboard;
    board1.placeShip(board1.playerShip.destroyer, [9, 5]);
    board1.receiveAttack([9, 5]);
    board1.receiveAttack([8, 5]);
    board1.receiveAttack([7, 5]);

    expect(board1.playerShip.destroyer[0]).toBe('hit');
    expect(board1.playerShip.destroyer[1]).toBe('hit');
    expect(board1.playerShip.destroyer[2]).toBe('hit');

    expect(board1.playerShip.isSunk(board1.playerShip.destroyer)).toBe(true)
})

test('check if the missed shot is well tracked', () => {
    const board1 = new Gameboard;
    board1.placeShip(board1.playerShip.destroyer, [9, 5])
    board1.receiveAttack([3, 4])

    expect(board1.missed[0]).toEqual([3, 4]);
}) 

test('check if the app reports when ships are all sunk', () => {
    const board1 = new Gameboard;
    board1.playerShip.hit(board1.playerShip.carrier);
    board1.playerShip.hit(board1.playerShip.carrier);
    board1.playerShip.hit(board1.playerShip.carrier);
    board1.playerShip.hit(board1.playerShip.carrier);
    board1.playerShip.hit(board1.playerShip.carrier);

    board1.playerShip.hit(board1.playerShip.battleship);
    board1.playerShip.hit(board1.playerShip.battleship);
    board1.playerShip.hit(board1.playerShip.battleship);
    board1.playerShip.hit(board1.playerShip.battleship);

    board1.playerShip.hit(board1.playerShip.destroyer);
    board1.playerShip.hit(board1.playerShip.destroyer);
    board1.playerShip.hit(board1.playerShip.destroyer);

    board1.playerShip.hit(board1.playerShip.submarine);
    board1.playerShip.hit(board1.playerShip.submarine);
    board1.playerShip.hit(board1.playerShip.submarine);

    board1.playerShip.hit(board1.playerShip.patrol);
    board1.playerShip.hit(board1.playerShip.patrol);

    expect(board1.report()).toBe('Ships are all gone, Game Over');
})