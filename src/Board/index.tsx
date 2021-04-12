import { BoardProps } from "boardgame.io/react";
import { G, Position, Result } from "../game";

interface LocalBoardProps extends BoardProps {
    G: G;
}

const Board = ({ G, ctx, moves, isActive }: LocalBoardProps) => {
    const player = ctx.currentPlayer as Position;
    const gameover = ctx.gameover as Result;

    return (
        <div>
            <span>{G.cells[29].obstacle?.name}</span>
        </div>
    );
};

export default Board;