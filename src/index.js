import { data } from "browserslist";
import "./styles.css";
const Ship = require('./ship');
const Gameboard = require('./gameboard');
const Player = require('./player');

const body = document.querySelector('#container');
const header = document.createElement('div');
const bCon = document.createElement('div');

const hdiv1 = document.createElement('div');
const hdiv2 = document.createElement('div');

const bdiv1 = document.createElement('div');
const bdiv2 = document.createElement('div');

header.classList.add('header');
bCon.classList.add("bCon");

body.appendChild(header);
body.appendChild(bCon);

bCon.appendChild(bdiv1);
bCon.appendChild(bdiv2);
bdiv1.classList.add('player');
bdiv2.classList.add('computer');

header.appendChild(hdiv1);
header.appendChild(hdiv2);
hdiv1.classList.add('title');
hdiv2.classList.add('rule');

hdiv1.textContent = "Battle Ship"
hdiv2.textContent = 'Rules'

bdiv1.textContent = 'Players'
bdiv2.textContent = 'Computer'

const dialog = document.querySelector('.dialog');
const close = document.querySelector('dialog button');

hdiv2.addEventListener('click', () => {
    dialog.showModal();
})

close.addEventListener('click', () => {
    dialog.close();
})

// board making function 
function makingGrid() {
    const mainBoard = document.createElement('div');
    mainBoard.classList.add('mainboard');

    for(let i = 0; i < 81; i++) {
        const divB = document.createElement('div');
        mainBoard.appendChild(divB);
        divB.classList.add('grid');
    }
    
    return mainBoard;
}

bdiv1.addEventListener('click', () => {
    bCon.textContent = "";
    const board1p = makingGrid();
    const board2p = makingGrid();

    bCon.appendChild(board1p);
    bCon.appendChild(board2p);
})

bdiv2.addEventListener('click', () => {
    bCon.textContent = "";
    const board1p = makingGrid();
    const board2p = makingGrid();

    bCon.appendChild(board1p);
    bCon.appendChild(board2p);
})