import { BOARD_LENGTH, Piece, Players, Position } from "../Board.lib"
import { BoardConfiguration } from "../configurations/configurations"

export class Bishop extends Piece {
  constructor(owner: Players) {
    super(owner)

    switch (owner) {
      case Players.White:
        this.icon = "♗"
        break
      case Players.Black:
        this.icon = "♝"
        break
    }
  }

  getPossibleMoves(
    board: BoardConfiguration,
    position: Position
  ): Array<Position> {
    const currentTurn = board[position.x][position.y]?.owner
    const possibleMoves = []

    let currentPosition =
      this.owner === Players.Black
        ? { x: position.x + 1, y: position.y + 1 }
        : { x: position.x - 1, y: position.y - 1 }

    // forward left
    while (true) {
      if (
        currentPosition.x >= BOARD_LENGTH ||
        currentPosition.x < 0 ||
        currentPosition.y >= BOARD_LENGTH ||
        currentPosition.y < 0 ||
        (board[currentPosition.x][currentPosition.y] !== null &&
          board[currentPosition.x][currentPosition.y]?.owner === currentTurn)
      )
        break

      possibleMoves.push(currentPosition)

      if (
        board[currentPosition.x][currentPosition.y] !== null &&
        board[currentPosition.x][currentPosition.y]?.owner !== currentTurn
      )
        break

      currentPosition =
        this.owner === Players.Black
          ? { x: currentPosition.x + 1, y: currentPosition.y + 1 }
          : { x: currentPosition.x - 1, y: currentPosition.y - 1 }
    }

    // forward right
    currentPosition =
      this.owner === Players.Black
        ? { x: position.x + 1, y: position.y - 1 }
        : { x: position.x - 1, y: position.y + 1 }
    while (true) {
      if (
        currentPosition.x >= BOARD_LENGTH ||
        currentPosition.x < 0 ||
        currentPosition.y >= BOARD_LENGTH ||
        currentPosition.y < 0 ||
        (board[currentPosition.x][currentPosition.y] !== null &&
          board[currentPosition.x][currentPosition.y]?.owner === currentTurn)
      )
        break

      possibleMoves.push(currentPosition)

      if (
        board[currentPosition.x][currentPosition.y] !== null &&
        board[currentPosition.x][currentPosition.y]?.owner !== currentTurn
      )
        break

      currentPosition =
        this.owner === Players.Black
          ? { x: currentPosition.x + 1, y: currentPosition.y - 1 }
          : { x: currentPosition.x - 1, y: currentPosition.y + 1 }
    }

    //backward left
    currentPosition =
      this.owner === Players.Black
        ? { x: position.x - 1, y: position.y + 1 }
        : { x: position.x + 1, y: position.y - 1 }
    while (true) {
      if (
        currentPosition.x >= BOARD_LENGTH ||
        currentPosition.x < 0 ||
        currentPosition.y >= BOARD_LENGTH ||
        currentPosition.y < 0 ||
        (board[currentPosition.x][currentPosition.y] !== null &&
          board[currentPosition.x][currentPosition.y]?.owner === currentTurn)
      )
        break

      possibleMoves.push(currentPosition)

      if (
        board[currentPosition.x][currentPosition.y] !== null &&
        board[currentPosition.x][currentPosition.y]?.owner !== currentTurn
      )
        break

      currentPosition =
        this.owner === Players.Black
          ? { x: currentPosition.x - 1, y: currentPosition.y + 1 }
          : { x: currentPosition.x + 1, y: currentPosition.y - 1 }
    }

    // backward right
    currentPosition =
      this.owner === Players.Black
        ? { x: position.x - 1, y: position.y - 1 }
        : { x: position.x + 1, y: position.y + 1 }
    while (true) {
      if (
        currentPosition.x >= BOARD_LENGTH ||
        currentPosition.x < 0 ||
        currentPosition.y >= BOARD_LENGTH ||
        currentPosition.y < 0 ||
        (board[currentPosition.x][currentPosition.y] !== null &&
          board[currentPosition.x][currentPosition.y]?.owner === currentTurn)
      )
        break

      possibleMoves.push(currentPosition)

      if (
        board[currentPosition.x][currentPosition.y] !== null &&
        board[currentPosition.x][currentPosition.y]?.owner !== currentTurn
      )
        break

      currentPosition =
        this.owner === Players.Black
          ? { x: currentPosition.x - 1, y: currentPosition.y - 1 }
          : { x: currentPosition.x + 1, y: currentPosition.y + 1 }
    }

    return possibleMoves
  }
}
