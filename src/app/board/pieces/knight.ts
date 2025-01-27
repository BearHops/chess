import {
  BOARD_LENGTH,
  BoardModel,
  Piece,
  Players,
  Position,
} from "../Board.lib"
import { BoardConfiguration } from "../configurations/configurations"

export class Knight extends Piece {
  constructor(owner: Players) {
    super(owner)

    switch (owner) {
      case Players.White:
        this.icon = "♘"
        break
      case Players.Black:
        this.icon = "♞"
        break
    }
  }

  getPossibleMoves(
    board: BoardConfiguration,
    position: Position
  ): Array<Position> {
    const currentTurn = board[position.x][position.y]?.owner
    const possibleMoves: Array<Position> = []

    const leftForwardPosition =
      this.owner === Players.Black
        ? { x: position.x + 1, y: position.y + 2 }
        : { x: position.x - 1, y: position.y - 2 }
    const canMoveLeftForward =
      leftForwardPosition.x < BOARD_LENGTH &&
      leftForwardPosition.x >= 0 &&
      leftForwardPosition.y < BOARD_LENGTH &&
      leftForwardPosition.y >= 0 &&
      (board[leftForwardPosition.x][leftForwardPosition.y] === null ||
        board[leftForwardPosition.x][leftForwardPosition.y]?.owner !==
          currentTurn)
    if (canMoveLeftForward) {
      possibleMoves.push(leftForwardPosition)
    }

    const leftBackwardPosition =
      this.owner === Players.Black
        ? { x: position.x - 1, y: position.y + 2 }
        : { x: position.x + 1, y: position.y - 2 }
    const canMoveLeftBackward =
      leftBackwardPosition.x < BOARD_LENGTH &&
      leftBackwardPosition.x >= 0 &&
      leftBackwardPosition.y < BOARD_LENGTH &&
      leftBackwardPosition.y >= 0 &&
      (board[leftBackwardPosition.x][leftBackwardPosition.y] === null ||
        board[leftBackwardPosition.x][leftBackwardPosition.y]?.owner !==
          currentTurn)
    if (canMoveLeftBackward) {
      possibleMoves.push(leftBackwardPosition)
    }

    const forwardLeftPosition =
      this.owner === Players.Black
        ? { x: position.x + 2, y: position.y + 1 }
        : { x: position.x - 2, y: position.y - 1 }
    const canMoveForwardLeft =
      forwardLeftPosition.x < BOARD_LENGTH &&
      forwardLeftPosition.x >= 0 &&
      forwardLeftPosition.y < BOARD_LENGTH &&
      forwardLeftPosition.y >= 0 &&
      (board[forwardLeftPosition.x][forwardLeftPosition.y] === null ||
        board[forwardLeftPosition.x][forwardLeftPosition.y]?.owner !==
          currentTurn)
    if (canMoveForwardLeft) {
      possibleMoves.push(forwardLeftPosition)
    }

    const forwardRightPosition =
      this.owner === Players.Black
        ? { x: position.x + 2, y: position.y - 1 }
        : { x: position.x - 2, y: position.y + 1 }
    const canMoveForwardRight =
      forwardRightPosition.x < BOARD_LENGTH &&
      forwardRightPosition.x >= 0 &&
      forwardRightPosition.y < BOARD_LENGTH &&
      forwardRightPosition.y >= 0 &&
      (board[forwardRightPosition.x][forwardRightPosition.y] === null ||
        board[forwardRightPosition.x][forwardRightPosition.y]?.owner !==
          currentTurn)
    if (canMoveForwardRight) {
      possibleMoves.push(forwardRightPosition)
    }

    const rightForwardPosition =
      this.owner === Players.Black
        ? { x: position.x + 1, y: position.y - 2 }
        : { x: position.x - 1, y: position.y + 2 }
    const canMoveRightForward =
      rightForwardPosition.x < BOARD_LENGTH &&
      rightForwardPosition.x >= 0 &&
      rightForwardPosition.y < BOARD_LENGTH &&
      rightForwardPosition.y >= 0 &&
      (board[rightForwardPosition.x][rightForwardPosition.y] === null ||
        board[rightForwardPosition.x][rightForwardPosition.y]?.owner !==
          currentTurn)
    if (canMoveRightForward) {
      possibleMoves.push(rightForwardPosition)
    }

    const rightBackwardPosition =
      this.owner === Players.Black
        ? { x: position.x - 1, y: position.y - 2 }
        : { x: position.x + 1, y: position.y + 2 }
    const canMoveRightBackward =
      rightBackwardPosition.x < BOARD_LENGTH &&
      rightBackwardPosition.x >= 0 &&
      rightBackwardPosition.y < BOARD_LENGTH &&
      rightBackwardPosition.y >= 0 &&
      (board[rightBackwardPosition.x][rightBackwardPosition.y] === null ||
        board[rightBackwardPosition.x][rightBackwardPosition.y]?.owner !==
          currentTurn)
    if (canMoveRightBackward) {
      possibleMoves.push(rightBackwardPosition)
    }

    const backwardRightPosition =
      this.owner === Players.Black
        ? { x: position.x - 2, y: position.y - 1 }
        : { x: position.x + 2, y: position.y + 1 }
    const canMoveBackwardRight =
      backwardRightPosition.x < BOARD_LENGTH &&
      backwardRightPosition.x >= 0 &&
      backwardRightPosition.y < BOARD_LENGTH &&
      backwardRightPosition.y >= 0 &&
      (board[backwardRightPosition.x][backwardRightPosition.y] === null ||
        board[backwardRightPosition.x][backwardRightPosition.y]?.owner !==
          currentTurn)
    if (canMoveBackwardRight) {
      possibleMoves.push(backwardRightPosition)
    }

    const backwardLeftPosition =
      this.owner === Players.Black
        ? { x: position.x - 2, y: position.y + 1 }
        : { x: position.x + 2, y: position.y - 1 }
    const canMoveBackwardLeft =
      backwardLeftPosition.x < BOARD_LENGTH &&
      backwardLeftPosition.x >= 0 &&
      backwardLeftPosition.y < BOARD_LENGTH &&
      backwardLeftPosition.y >= 0 &&
      (board[backwardLeftPosition.x][backwardLeftPosition.y] === null ||
        board[backwardLeftPosition.x][backwardLeftPosition.y]?.owner !==
          currentTurn)
    if (canMoveBackwardLeft) {
      possibleMoves.push(backwardLeftPosition)
    }

    return possibleMoves
  }
}
