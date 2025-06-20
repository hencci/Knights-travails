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

function parseInput(value) {
    return value.split(',').map(Number);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const start = parseInput(startInput.value);
    const end = parseInput(endInput.value);

    const path = knightMoves(start, end);

    if (!path) {
        resultElement.textContent = "No valid path found.";
        return;
    }

    resultElement.textContent = `You made it in ${path.length - 1} moves! Here's your path:\n` +
    path.map(p => `[${p[0]},${p[1]}]`).join('\n');

    highlightPath(path);
});