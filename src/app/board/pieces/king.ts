import { BoardModel, Piece, Players } from "../Board.lib";

export class King extends Piece {
    constructor(owner:Players) {
        super(owner)

        switch (owner) {
            case Players.White:
                this.icon = "♔"
                break
            case Players.Black:
                this.icon = "♚"
                break
        }
    }

    getPossibleMoves(board: BoardModel): Array<Array<Piece | null>> {
        return [
            []
        ]
    }
}