import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Board from './Board'

// Helper: render a fresh Board before each test
function setup() {
  return render(<Board />)
}

function getSquares() {
  return screen.getAllByRole('button', { name: /square/i }).length
    ? screen.getAllByRole('button', { name: /square/i })
    : document.querySelectorAll('button.square')
}

describe('Tic-Tac-Toe Board', () => {
  // 1. Export check – handled implicitly by importing Board above.
  it('1. should export a Board component', () => {
    expect(Board).toBeDefined()
    expect(typeof Board).toBe('function')
  })

  // 2. Nine button.square elements
  it('2. should have nine button.square elements', () => {
    const { container } = setup()
    const squares = container.querySelectorAll('button.square')
    expect(squares).toHaveLength(9)
  })

  // 3. 3×3 grid – squares rendered inside a grid parent
  it('3. the button.square elements should be in a 3×3 grid', () => {
    const { container } = setup()
    const board = container.querySelector('.board')
    expect(board).not.toBeNull()
    const squares = board.querySelectorAll('button.square')
    expect(squares).toHaveLength(9)
  })

  // 4. First click shows X
  it('4. first click of a button.square should display X', () => {
    const { container } = setup()
    const squares = container.querySelectorAll('button.square')
    fireEvent.click(squares[0])
    expect(squares[0].textContent).toBe('X')
  })

  // 5. Reset button resets the game
  it('5. clicking button#reset should reset the game', () => {
    const { container } = setup()
    const squares = container.querySelectorAll('button.square')
    fireEvent.click(squares[0])
    fireEvent.click(squares[1])
    expect(squares[0].textContent).toBe('X')

    const resetBtn = container.querySelector('button#reset')
    fireEvent.click(resetBtn)

    const freshSquares = container.querySelectorAll('button.square')
    freshSquares.forEach(sq => expect(sq.textContent).toBe(''))
  })

  // 6. Second click shows O
  it('6. second click of a different button.square should display O', () => {
    const { container } = setup()
    const squares = container.querySelectorAll('button.square')
    fireEvent.click(squares[0])
    fireEvent.click(squares[1])
    expect(squares[1].textContent).toBe('O')
  })

  // 7. Subsequent clicks alternate X / O
  it('7. subsequent clicks should alternate between X and O', () => {
    const { container } = setup()
    const squares = container.querySelectorAll('button.square')
    const expected = ['X', 'O', 'X', 'O', 'X', 'O']
    for (let i = 0; i < expected.length; i++) {
      fireEvent.click(squares[i])
      expect(squares[i].textContent).toBe(expected[i])
    }
  })

  // 8. Clicking an already-used square does nothing
  it('8. clicking an already used square should result in no change', () => {
    const { container } = setup()
    const squares = container.querySelectorAll('button.square')
    fireEvent.click(squares[0]) // X
    fireEvent.click(squares[0]) // should still be X, not O
    expect(squares[0].textContent).toBe('X')
    // Next player should still be O (turn did not advance)
    fireEvent.click(squares[1])
    expect(squares[1].textContent).toBe('O')
  })

  // 9. Clicking after game ended has no effect
  it('9. clicking a square after the game has ended should result in no change', () => {
    const { container } = setup()
    const squares = container.querySelectorAll('button.square')
    // X wins: 0,1,2
    fireEvent.click(squares[0]) // X
    fireEvent.click(squares[3]) // O
    fireEvent.click(squares[1]) // X
    fireEvent.click(squares[4]) // O
    fireEvent.click(squares[2]) // X wins

    // Try clicking an empty square after win
    const emptySquare = squares[5]
    fireEvent.click(emptySquare)
    expect(emptySquare.textContent).toBe('')
  })

  // 10. Displays winner message
  it('10. should display a message indicating the winner (X or O)', () => {
    const { container } = setup()
    const squares = container.querySelectorAll('button.square')
    // X wins top row
    fireEvent.click(squares[0]) // X
    fireEvent.click(squares[3]) // O
    fireEvent.click(squares[1]) // X
    fireEvent.click(squares[4]) // O
    fireEvent.click(squares[2]) // X wins

    expect(container.textContent).toMatch(/Winner:\s*X/)
  })

  // 11. Displays draw message
  it('11. should display a message indicating a draw', () => {
    const { container } = setup()
    const squares = container.querySelectorAll('button.square')
    /*
      Fill the board to a draw:
      X | O | X
      X | O | O
      O | X | X
    */
    fireEvent.click(squares[0]) // X
    fireEvent.click(squares[1]) // O
    fireEvent.click(squares[2]) // X
    fireEvent.click(squares[4]) // O
    fireEvent.click(squares[3]) // X
    fireEvent.click(squares[5]) // O
    fireEvent.click(squares[7]) // X
    fireEvent.click(squares[6]) // O
    fireEvent.click(squares[8]) // X

    expect(container.textContent).toMatch(/draw/i)
  })
})
