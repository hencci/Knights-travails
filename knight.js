import { isValidPosition } from "./board.js";

const moveOffsets = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1],
];

export function getKnightMoves([x, y]) {
    return moveOffsets
    .map(([dx, dy]) => [x + dx, y + dy])
    .filter(isValidPosition);
}