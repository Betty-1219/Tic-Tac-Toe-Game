# 🎮 Tic-Tac-Toe Game

A simple, interactive, and responsive Tic-Tac-Toe game built with **React**, **JavaScript**, and **CSS**. This project allows two players to play against each other, taking turns placing X and O on a 3×3 game board. It automatically detects winners and draws and provides a reset option to start a new game.


## 📌 Project Overview

The Tic-Tac-Toe Game is a front-end web application developed to practice React fundamentals, component-based architecture, state management, and event handling.

The game is designed for two players sharing the same screen. Player X starts first, followed by Player O. The application checks the board after every move to determine whether a player has won or the game has ended in a draw.

## ✨ Features

- **Interactive 3×3 Board:** Nine clickable squares arranged in a grid.
- **Two-Player Gameplay:** Two players can play on the same device.
- **Automatic Turn Switching:** Players alternate between X and O.
- **Winner Detection:** Automatically identifies a winner when three matching symbols appear horizontally, vertically, or diagonally.
- **Draw Detection:** Displays a draw message when all nine squares are filled without a winner.
- **Prevent Invalid Moves:** Players cannot overwrite an already occupied square.
- **Game Over Protection:** Prevents additional moves after a player wins or the game ends in a draw.
- **Reset Game:** Allows players to restart the game at any time.
- **Responsive Design:** Simple and clean interface with a centered game board.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building reusable UI components |
| JavaScript (ES6+) | Game logic and functionality |
| HTML5 | Application structure |
| CSS3 | Styling and layout |
| Vite | Development and build tooling |

## 📂 Project Structure

```text
Tic-Tac-Toe-Game/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Board.jsx
│   │   ├── Board.css
│   │   └── Board.test.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Betty-1219/Tic-Tac-Toe-Game.git
```

### 2. Navigate to the project directory

```bash
cd Tic-Tac-Toe-Game
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🎯 How to Play

1. Open the Tic-Tac-Toe application.
2. Player X starts the game.
3. Player X selects an empty square.
4. Player O selects another empty square.
5. Continue alternating turns.
6. The first player to get three matching symbols in a row, column, or diagonal wins.
7. If all nine squares are filled without a winner, the game ends in a draw.
8. Click **Reset Game** to start a new round.

## 🧠 Game Logic

The application uses React's `useState` Hook to manage the game state.

- `squares`: Stores the current value of each of the nine squares.
- `xIsNext`: Tracks which player's turn is next.
- `calculateWinner()`: Checks all eight possible winning combinations.
- `handleClick()`: Handles player moves and prevents invalid selections.
- `handleReset()`: Clears the board and restores Player X's first turn.
- Draw detection: Checks whether all squares are occupied and no winner exists.

## 📚 Learning Outcomes

Through this project, I practiced:

- Creating and exporting React components.
- Using React Hooks, especially `useState`.
- Rendering lists of elements using `.map()`.
- Handling click events in React.
- Managing and updating application state.
- Implementing conditional rendering.
- Working with JavaScript arrays and functions.
- Organizing a React project into reusable components.
- Using Git and GitHub for version control.

## 🚀 Future Improvements

- Add a score tracker for both players.
- Add a single-player mode against an AI opponent.
- Add sound effects for player moves and wins.
- Add a game history feature.
- Improve animations and mobile responsiveness.

## 👩‍💻 Developer

**Betelhem Nurlachew**

Software Engineering Student | Front-End Development | Artificial Intelligence & Machine Learning

- GitHub: [Betty-1219](https://github.com/Betty-1219)
- Project Repository: [Tic-Tac-Toe-Game](https://github.com/Betty-1219/Tic-Tac-Toe-Game)

---

⭐ If you like this project, feel free to explore the repository and share your feedback!

**Built with ❤️ using React.**
