import { BOARD_LENGTH, Piece, Players, Position } from "../Board.lib"
import { BoardConfiguration } from "../configurations/configurations"

export class Pawn extends Piece {
  constructor(owner: Players) {
    super(owner)

    switch (owner) {
      case Players.White:
        this.icon = "♙"
        break
      case Players.Black:
        this.icon = "♟"
        break
    }
  }

  getPossibleMoves(
    board: BoardConfiguration,
    position: Position
  ): Array<Position> {
    const currentTurn = board[position.x][position.y]?.owner
    const possibleMoves: Array<Position> = []

    const forwardOncePosition =
      this.owner === Players.Black
        ? ({ x: position.x + 1, y: position.y } as Position)
        : ({ x: position.x - 1, y: position.y } as Position)

    const canMoveForwardOnce =
      forwardOncePosition.x < BOARD_LENGTH &&
      forwardOncePosition.x >= 0 &&
      board[forwardOncePosition.x][forwardOncePosition.y] === null

    if (canMoveForwardOnce) {
      possibleMoves.push(forwardOncePosition)
    }
    // can move forward
    if (canMoveForwardOnce && this.turnLastMoved === null) {
      const forwardTwicePosition =
        this.owner === Players.Black
          ? ({ x: position.x + 2, y: position.y } as Position)
          : ({ x: position.x - 2, y: position.y } as Position)

      const canMoveForwardTwice =
        forwardTwicePosition.x < BOARD_LENGTH &&
        forwardTwicePosition.x >= 0 &&
        board[forwardTwicePosition.x][forwardTwicePosition.y] === null

      if (canMoveForwardTwice) {
        possibleMoves.push(forwardTwicePosition)
      }
    }

    const attackLeftPosition =
      this.owner === Players.Black
        ? { x: position.x + 1, y: position.y - 1 }
        : { x: position.x - 1, y: position.y - 1 }

    const canAttackLeft =
      attackLeftPosition.x < BOARD_LENGTH &&
      attackLeftPosition.x >= 0 &&
      attackLeftPosition.y < BOARD_LENGTH &&
      attackLeftPosition.y >= 0 &&
      board[attackLeftPosition.x][attackLeftPosition.y] !== null &&
      board[attackLeftPosition.x][attackLeftPosition.y]?.owner !== currentTurn
    if (canAttackLeft) {
      possibleMoves.push(attackLeftPosition)
    }

    const attackRightPosition =
      this.owner === Players.Black
        ? { x: position.x + 1, y: position.y + 1 }
        : { x: position.x - 1, y: position.y + 1 }

    const canAttackRight =
      attackRightPosition.x < BOARD_LENGTH &&
      attackRightPosition.x >= 0 &&
      attackRightPosition.y < BOARD_LENGTH &&
      attackRightPosition.y >= 0 &&
      board[attackRightPosition.x][attackRightPosition.y] !== null &&
      board[attackRightPosition.x][attackRightPosition.y]?.owner !== currentTurn
    if (canAttackRight) {
      possibleMoves.push(attackRightPosition)
    }

    return possibleMoves
  }
}
