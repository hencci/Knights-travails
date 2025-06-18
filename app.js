import { knightMoves } from "./pathfinders.js";

/**
 * Runs the knightMoves function and logs the path to the console.
 * @param {number[]} start - Starting position [x, y]
 * @param {number[]} end - Target position [x, y]
 */

function runKnightTravails(start, end) {
    const path = knightMoves(start, end);

    if (!path) {
        console.log("No path found.");
        return;
    }

    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach(pos => console.log(pos));
}

// Example usage
runKnightTravails([0, 0], [7, 7]);