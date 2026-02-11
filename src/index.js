import { data } from "browserslist";
import "./styles.css";
import { co } from "co";
const Ship = require('./ship');
const Gameboard = require('./gameboard');
const Player = require('./player');

const container = document.querySelector('#container');
const header = document.createElement('div');
header.classList.add('header');
const title = document.createElement('div');
title.classList.add('title');
const deploy = document.createElement('div');
deploy.classList.add('deploy');

container.appendChild(header);
header.appendChild(title);
header.appendChild(deploy);

title.textContent = "Battle Ship";

const hor_ver = document.createElement('button');
hor_ver.addEventListener('click', () => {
    if(hor_ver.textContent === 'Horizontal') {
        hor_ver.textContent = 'Vertical';
    } else {
        hor_ver.textContent = 'Horizontal'
    }
})
const random = document.createElement('button');

deploy.appendChild(hor_ver);
deploy.appendChild(random);

hor_ver.textContent = "Horizontal";
random.textContent = "Random"

const bCon = document.createElement('div');
bCon.classList.add('bcon');
const ships = document.createElement('div');
ships.classList.add('ships');
const board = document.createElement('div');
board.classList.add('board');

for(let i = 0; i < 81; i++) {
    const div = document.createElement('div');
    if(i >= 0 && i < 9) {
        div.dataset.row = '1';
        div.dataset.col = `${i+1}`;
    } else if(i >= 9 && i < 18) {
        div.dataset.row = '2';
        div.dataset.col = `${i-8}`;        
    } else if(i >=18 && i < 27) {
        div.dataset.row = '3';
        div.dataset.col = `${i-17}`;
    } else if(i >= 27 && i < 36) {
        div.dataset.row = '4';
        div.dataset.col = `${i-26}`;
    } else if (i >= 36 && i < 45) {
        div.dataset.row = '5';
        div.dataset.col = `${i-35}`;
    } else if (i >= 45 && i < 54) {
        div.dataset.row = '6';
        div.dataset.col = `${i-44}`;
    } else if (i >= 54 && i < 63) {
        div.dataset.row = '7';
        div.dataset.col = `${i-53}`;
    } else if (i >= 63 && i < 72) {
        div.dataset.row = '8';
        div.dataset.col = `${i-62}`;
    } else if (i >= 72 && i < 81) {
        div.dataset.row = '9';
        div.dataset.col = `${i-71}`;
    }
    div.classList.add('g-board');
    board.appendChild(div);
}

container.appendChild(bCon);
bCon.appendChild(ships);
bCon.appendChild(board);

const carrier = document.createElement('div');
const battleship = document.createElement('div');
const destroyer = document.createElement('div');
const submarine = document.createElement('div');
const patrol = document.createElement('div');

ships.appendChild(carrier);
ships.appendChild(battleship);
ships.appendChild(destroyer);
ships.appendChild(submarine);
ships.appendChild(patrol);

carrier.textContent = 'Carrier';
carrier.setAttribute('draggable', 'true');

battleship.textContent = 'BattleShip';
battleship.setAttribute('draggable', 'true');

destroyer.textContent = 'Destroyer';
destroyer.setAttribute('draggable', 'true');

submarine.textContent = 'Submarine';
submarine.setAttribute('draggable', 'true');

patrol.textContent = 'Patrol';
patrol.setAttribute('draggable', 'true');

const footer = document.createElement('div');
footer.classList.add('footer');
const start = document.createElement('button');
start.textContent = 'Play';

container.appendChild(footer);
footer.appendChild(start);

const p1Board = new Gameboard;

const divs = board.querySelectorAll('div');

// Add data-row / data-col to every grid cell
// use placeShip()
// inside drop only call that function 
// let the board logic decide success/failure

function dragstartHandler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.innerText);
    ev.dataTransfer.setData('text/html', ev.target.outerHTML);
    ev.dataTransfer.setData(
        "text/uri-list",
        ev.target.ownerDocument.location.href,
    )
}

[carrier, battleship, destroyer, submarine, patrol].forEach(ship => {
    ship.addEventListener('dragstart', dragstartHandler);
});

function coloring() {
    divs.forEach(item => {
        for(let key in p1Board.ships) {
            const coords = p1Board.ships[key];

            if(!Array.isArray(coords)) continue;

            for(let i = 0; i < coords.length; i++) {
                if(Number(item.dataset.row) === coords[i][0] && Number(item.dataset.col) === coords[i][1]) {
                    item.style.backgroundColor = 'orange'
                }
            }
        }
    })
}

divs.forEach(item => {
    item.addEventListener('dragover', (ev) => {
        ev.preventDefault();
    })

    item.addEventListener('drop', (ev) => {
        ev.preventDefault();

        let data = ev.dataTransfer.getData("text/plain");

        let direction = 'h'
        if(hor_ver.textContent === 'Horizontal') {
            direction = 'h'
        } else if(hor_ver.textContent === 'Vertical') {
            direction = 'v';
        }

        let coord = [];
        coord[0] = Number(item.dataset.row);
        coord[1] = Number(item.dataset.col);

        let kind = '';
        // gameboard placeShip function adapt
        if(data === 'Carrier') {
            kind = p1Board.playerShip.carrier;
        } else if(data === 'BattleShip') {
            kind = p1Board.playerShip.battleship;
        } else if(data === 'Destroyer') {
            kind = p1Board.playerShip.destroyer;
        } else if(data === 'Submarine') {
            kind = p1Board.playerShip.submarine;
        } else if(data === 'Patrol') {
            kind = p1Board.playerShip.patrol;
        }

        p1Board.placeShip(kind, coord, direction);
        // console.log(p1Board.ships);

        coloring();

        console.log(data);

        if(data === carrier.textContent) {
            carrier.textContent = "";
        } else if(data === battleship.textContent) {
            battleship.textContent = "";
        } else if(data === destroyer.textContent) {
            destroyer.textContent = "";
        } else if(data === submarine.textContent) {
            submarine.textContent = "";
        } else if(data === patrol.textContent) {
            patrol.textContent = "";
        }
    })
})

function generator() {
    let num = Math.floor(Math.random()*8 + 1)

    return num;
}

random.addEventListener('click', () => {
    // clearboard
    // randomlyplacingships
    coloring();
    
})

start.addEventListener('click', () => {
    // opening new board with saved information (player)
    // another board for the computer which is not colored (computer)
})

// playing game 
// announces the winner 
// every grid cell should be allowed to 

// Drop happens -> done
// placeShip() runs -> done 
// UI loops through all ship coordinates
// grid cell that matches -> color it 

