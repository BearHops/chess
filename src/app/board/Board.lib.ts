import styles from "./Board.module.css"
import { BoardConfiguration } from "./configurations/configurations"

export enum Players {
  White,
  Black,
}

export type Position = {
  x: number
  y: number
}

export const BOARD_LENGTH = 8

export function getSquareClass(x: number, y: number) {
  const xIsEven = x % 2 === 0
  const yIsEven = y % 2 === 0

  if (xIsEven && yIsEven) {
    return styles.lightSquare
  } else if (!xIsEven && yIsEven) {
    return styles.darkSquare
  } else if (xIsEven && !yIsEven) {
    return styles.darkSquare
  } else {
    return styles.lightSquare
  }
}
export function movePiece(
  board: BoardConfiguration,
  fromPosition: Position,
  toPosition: Position,
  turnNumber: number
) {
  const movedPiece = board[fromPosition.x][fromPosition.y]
  if (!movedPiece) return
  movedPiece.turnLastMoved = turnNumber

  const capturedPiece = board[toPosition.x][toPosition.y]

  board[fromPosition.x][fromPosition.y] = null
  board[toPosition.x][toPosition.y] = movedPiece

  return {
    board,
    capturedPiece,
  }
}

export class Piece {
  owner: Players
  icon: string
  turnLastMoved: number | null = null

  constructor(owner: Players) {
    this.owner = owner
    this.icon = ""
  }

  getPossibleMoves(board: BoardConfiguration, position: Position) {
    console.debug("get possible moves must be implemented")
    return [] as Array<Position>
  }
}
export class BoardModel {
  squares: Array<Array<Piece | null>>

  constructor(configuration: BoardConfiguration) {
    this.squares = configuration
  }
}

export function initializeClassicBoard() {
  placeClassicPawns()
  placeClassicRooks()
  placeClassicKnights()
  placeClassicBishops()
  placeClassicRoyalty()
}
function placeClassicPawns() {}
function placeClassicRooks() {}
function placeClassicKnights() {}
function placeClassicBishops() {}
function placeClassicRoyalty() {}
