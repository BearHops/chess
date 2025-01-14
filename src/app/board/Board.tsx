import styles from "./Board.module.css"
import { BOARD_LENGTH, getSquareClass, movePiece, Piece, Players, Position } from "./Board.lib"
import { useEffect, useState } from "react"
import { BoardConfiguration, CLASSIC } from "./configurations/configurations"

export function Board() {
  const [board, setBoard] = useState<BoardConfiguration>(CLASSIC)
  const [turn, setTurn] = useState<Players>(Players.White)

  const [selectedPiece, setSelectedPiece] = useState<Piece|null>()
  const [selectedPiecePosition, setSelectedPiecePosition] = useState<Position|null>()

  function highlightSquare(position:Position) {
    const square = document.getElementById(`${position.x}${position.y}`)
    square?.classList.add(styles.availableSquare)
  }
  function removeSquareHighlights() {
    const squares = Array.from(document.getElementsByClassName(styles.availableSquare))
    for (let square of squares) {
      square.classList.remove(styles.availableSquare)
    }
  }
  function handleSquareClick(piece:Piece|null, position:Position) {
    const {x,y} = position
    removeSquareHighlights()

    if (piece?.owner === turn) {
      setSelectedPiece(piece)
      setSelectedPiecePosition({ x, y })

      const availableMoves = piece.getPossibleMoves(board, {x,y})
      for (let move of availableMoves) {
        highlightSquare(move)
      }

      return
    }

    if (selectedPiece && selectedPiecePosition) {
      const availableMoves = selectedPiece.getPossibleMoves(board, selectedPiecePosition)
      if (!availableMoves.some(move => move.x === x && move.y === y)) {
        setSelectedPiece(null)
        setSelectedPiecePosition(null)

        return 
      }

      const movedInfo = movePiece(board, selectedPiecePosition, {x,y}, 0)
      if (movedInfo?.board) {
        setBoard(movedInfo?.board)
        setTurn(currTurn => currTurn === Players.White ? Players.Black : Players.White)
      }
      return
    }

    if (!selectedPiece && piece?.owner !== turn) {
      setSelectedPiece(null)
      setSelectedPiecePosition(null)
      return
    }
  }

  return (
    <div className={styles.board}>
      {new Array(BOARD_LENGTH).fill(null).flatMap((_, x) => {
        return new Array(BOARD_LENGTH).fill(null).map((_, y) => {
          const piece = board[x][y]

          return (
          <div 
            className={`${styles.square} ${getSquareClass(x, y)}`} 
            key={`${x}${y}`} 
            id={`${x}${y}`} 
            onClick={() => handleSquareClick(piece, {x,y})}
          >
            {piece?.icon}
          </div>
        )})
      })}
    </div>
  )
}