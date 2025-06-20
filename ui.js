import { knightMoves } from "./pathfinders.js";

const boardElement = document.getElementById('board');
const resultElement = document.getElementById('result');
const form = document.getElementById('moveForm');
const startInput = document.getElementById('startInput');
const endInput = document.getElementById('endInput');

function createBoard() {
    boardElement.innerHTML = '';
    for (let y = 7; y >= 0; y--) {
        for (let x = 0; x < 8; x++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.pos = `${x},${y}`;
            boardElement.appendChild(square);
        }
    }
}

function highlightPath(path) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(sq => sq.classList.remove('highlight', 'start', 'end'));

    path.forEach((pos, idx) => {
        const selector = `.square[data-pos="${pos[0]},${pos[1]}"]`;
        const square = document.querySelector(selector);
        if (square) {
            if (idx === 0) square.classList.add('start');
            else if (idx === path.length - 1) square.classList.add('end');
            else square.classList.add('highlight');
        }
    });
}