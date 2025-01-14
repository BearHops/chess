import { BOARD_LENGTH, Piece, Players } from "../Board.lib"
import { Bishop } from "../pieces/bishop"
import { King } from "../pieces/king"
import { Knight } from "../pieces/knight"
import { Pawn } from "../pieces/pawn"
import { Queen } from "../pieces/queen"
import { Rook } from "../pieces/rook"

export type BoardConfiguration = Array<Array<Piece | null>>

export const CLASSIC: BoardConfiguration = [
  [
    new Rook(Players.Black),
    new Knight(Players.Black),
    new Bishop(Players.Black),
    new Queen(Players.Black),
    new King(Players.Black),
    new Bishop(Players.Black),
    new Knight(Players.Black),
    new Rook(Players.Black),
  ],
  new Array(BOARD_LENGTH).fill(null).map((_) => new Pawn(Players.Black)),
  new Array(BOARD_LENGTH).fill(null),
  new Array(BOARD_LENGTH).fill(null),
  new Array(BOARD_LENGTH).fill(null),
  new Array(BOARD_LENGTH).fill(null),
  new Array(BOARD_LENGTH).fill(null).map((_) => new Pawn(Players.White)),
  [
    new Rook(Players.White),
    new Knight(Players.White),
    new Bishop(Players.White),
    new Queen(Players.White),
    new King(Players.White),
    new Bishop(Players.White),
    new Knight(Players.White),
    new Rook(Players.White),
  ],
]
