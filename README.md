# Knights-travails

A browser-based visualization of the **shortest path a knight can take** on a chessboard using **Breadth-First Search (BFS)**. Built with modern JavaScript and modular architecture.

---

## Table of Content

* [Featutes](#fearures)
* [How it works](#how-it-works)
* [File structure](#file-structure)
* [Getting started](#getting-started)
* [Contributions](#contributions)
* [Contact](#contact)

---

## 📌 Features

- 8×8 responsive chessboard
- Choose start and end coordinates
- Displays the shortest knight path
- Visually highlights path, start, and end points
- Fully modular JavaScript (separation of concerns)

---

## 🧠 How It Works

Each square on the board is treated as a **node in a graph**. The knight’s valid L-shaped moves are considered **edges** between nodes.  
We use **Breadth-First Search (BFS)** to find the shortest path between two coordinates.

---

## 🔧 File Structure

Knights-travails/<br>
├── index.html # Main HTML file<br>
├── style.css # Responsive styling<br>
├── board.js.js<br>
├── knight.js.js<br>
├── test.js # For console-based test cases<br>
├── ui.js # DOM creation, user input, display logic<br>
├── pathfinder.js # Core knightMoves() logic using BFS<br>
├── README.md # You're here

---

## 🚀 Getting Started

### 🖥️ Run in Browser

1. Clone or download the repo  
2. Open `index.html` in your browser  
3. Input start and end positions (e.g. `0,0` and `7,7`)  
4. Click "Find Path" to visualize the shortest route

### 🧪 Optional: Run in Node.js

1. Make sure you have Node.js installed  
2. Run setup:
```bash
npm install
```
3. Then:
```
npm start
```
This uses test.js to print results in the console.

---

🔁 Example Paths

---
```
knightMoves([0,0], [1,2]) // [[0,0], [1,2]]
knightMoves([0,0], [3,3]) // [[0,0], [1,2], [3,3]]
knightMoves([0,0], [7,7]) // [[0,0], [2,1], [4,2], [6,3], [7,5], [5,6], [7,7]]
```

---

## 💡 Contributions

Feel free to fork this repository and improve the project! 🚀
PRs are welcome! 😊

---

## 📄 License
This project is open-source and free to use under the MIT License.

---

## Contact

Created by [Henry Moses](https://github.com/hencci)
Feel free to reach out if you have any questions