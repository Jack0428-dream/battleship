const Player = require('./player');

test('see if setting the type of player is working correctly', () => {
    const computer = new Player;
    computer.typeChange = 'computer';

    expect(computer.type).toBe('computer');
})

test('see if setting the type of player is working correctly', () => {
    const human = new Player;
    human.typeChange = 'human1'

    expect(human.type).toBe('human1');
})

test('see if setting the type of player is working correctly', () => {
    const human = new Player;

    expect(human.type).toBe('human');
})