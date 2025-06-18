import { getKnightMoves } from './knight.js';

/**
 * Finds the shortest path a knight can take from start to end using BFS.
 * @param {number[]} start - Starting position [x, y]
 * @param {number[]} end - Target position [x, y]
 * @returns {number[][]} - Array of positions in the shortest path
 */

export function knightMoves(start, end) {
    // Each queue item: [current position, path taken so far]
    const queue = [[start, [start]]];
    const visited = new Set();

    while (queue.length > 0) {
        const [currentPos, path] = queue.shift();
        const key = currentPos.toString(); // "x,y"

        if (visited.has(key)) continue;
        visited.add(key);

        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            return path;
        }

        const moves = getKnightMoves(currentPos);

        for (const move of moves) {
            queue.push([move, [...path, move]]);
        }
    }

    return null;
}