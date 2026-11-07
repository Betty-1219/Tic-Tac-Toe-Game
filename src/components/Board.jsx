import { useState } from 'react'
import './Board.css'

// All winning combinations by index
const WINNING_LINES = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left col
  [1, 4, 7], // center col
  [2, 5, 8], // right col
  [0, 4, 8], // diagonal
  [2, 4, 6], // anti-diagonal
]

function calculateWinner(squares) {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(squares)
  const isDraw = !winner && squares.every(Boolean)

  function handleClick(index) {
    // Ignore click if game over or square already filled
    if (winner || squares[index]) return

    const next = squares.slice()
    next[index] = xIsNext ? 'X' : 'O'
    setSquares(next)
    setXIsNext(!xIsNext)
  }

  function handleReset() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  let statusMessage
  if (winner) {
    statusMessage = `Winner: ${winner}`
  } else if (isDraw) {
    statusMessage = "It's a Draw!"
  } else {
    statusMessage = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="board-container">
      <h1 className="title">Tic-Tac-Toe</h1>

      <p className="status">{statusMessage}</p>

      <div className="board">
        {squares.map((value, i) => (
          <button
            key={i}
            className={`square ${value ? `square--${value.toLowerCase()}` : ''}`}
            onClick={() => handleClick(i)}
            aria-label={`Square ${i + 1}${value ? `, ${value}` : ''}`}
          >
            {value}
          </button>
        ))}
      </div>

      <button id="reset" onClick={handleReset} className="reset-btn">
        Reset Game
      </button>
    </div>
  )
}

export default Board
