const Ship = require('./ship');

test('see if class has arrays', () => {
    const test = new Ship();
    expect(test.carrier['carrier'].length).toBe(5);
});

test('add hit an array', () => {
    const test = new Ship();
    test.hit(test.carrier);
    test.hit(test.battleship);
    test.hit(test.destroyer);
    test.hit(test.submarine);
    test.hit(test.patrol);

    expect(test.carrier[1]).toBe(null);
    expect(test.carrier.length).toBe(5);

    expect(test.battleship[0]).toBe("hit");
    expect(test.battleship.length).toBe(4);

    expect(test.destroyer[0]).toBe("hit");
    expect(test.destroyer.length).toBe(3);

    expect(test.submarine[1]).toBe(null);
    expect(test.submarine.length).toBe(3);

    expect(test.patrol[0]).toBe("hit");
    expect(test.patrol.length).toBe(2);
})

test('if ship is sunk', () => {
    const test = new Ship();
    test.hit(test.carrier);
    test.hit(test.carrier);
    test.hit(test.carrier);
    test.hit(test.carrier);
    test.hit(test.carrier);

    expect(test.isSunk(test.carrier)).toBe(true);
    expect(test.hit(test.carrier)).toBe("this ship is sunk");
})