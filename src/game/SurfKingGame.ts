import { Ctx, Game } from "boardgame.io";
import { TurnOrder } from "boardgame.io/core";
import { Event, G, Player, Position, Result } from ".";
import { Card, SharkCard } from "./Card";
import { Cell, GRID_SIZE } from "./Board";
import { SharkObstacle } from "./Obstacle";

const createPlayer = (position: Position): Player => {
    const cards = new Array<Card>();
    // TODO: will receive 2 random cards
    cards.push(...Array(2).fill(SharkCard));
    return { position, cards, played: false };
};

const setup = (): G => {
    const players = {
        [Position.P1]: createPlayer(Position.P1),
        [Position.P2]: createPlayer(Position.P2),
    };

    let order = [Position.P1, Position.P2];
    order = order.sort(() => Math.random() - 0.5)

    const cells = new Array<Cell>(GRID_SIZE);

    // TODO: position players
    cells[2] = { number: 2, obstacle: undefined, player: players[order[0]] };
    cells[3] = { number: 3, obstacle: undefined, player: players[order[1]] };

    cells[29] = { number: 29, obstacle: SharkObstacle, player: undefined };
    cells[30] = { number: 30, obstacle: SharkObstacle, player: undefined };
    cells[31] = { number: 31, obstacle: SharkObstacle, player: undefined };
    cells[32] = { number: 32, obstacle: SharkObstacle, player: undefined };
    for (var i = 0; i < GRID_SIZE; ++i) {
        if (!cells[i]) {
            cells[i] = { number: i, obstacle: undefined, player: undefined };
        }
    }

    const events = new Array<Event>();

    return { cells, players, events, turn: 0, order };
};

const placeObstacules = (G: G, ctx: Ctx): void => {
    // TODO: Implement
    G.players[ctx.currentPlayer].played = true;
}

const phasePlaceFirstObstaculesOnEnd = (G: G, ctx: Ctx) => {
    if (Object["values"](G.players).every(p => (p as Player).played === true)) {
        ++G.turn;
    }
}

const endIf = (G: G, ctx: Ctx): Result | void => {
    // A player wins if he arrives at one of the cells: 50, 51, 52, or 53.
    for (var i = 50; i <= 53; ++i) {
        const cell = G.cells[i];
        if (cell) {
            const player: Player | undefined = cell.player;
            if (player) {
                return { winner: player }
            }
        }
    }
};

export const SurfKingGame: Game<G, Ctx> = {
    name: "SurfKing",

    setup: setup,

    turn: { order: TurnOrder.CUSTOM_FROM('order') },

    phases: {
        place_first_obstacules: {
            moves: { placeObstacules },
            onEnd: phasePlaceFirstObstaculesOnEnd,
            endIf: G => (G.turn > 0),
            next: 'firt_move_piece',
            start: true,
        },
        firt_move_piece: {
            moves: {},
            endIf: G => (G.turn > 1),
            next: 'play',
        },
        play: {
            moves: {},
            next: 'check',
        },
        check: {
            moves: {},
            next: 'play',
        },
    },

    minPlayers: 2,
    maxPlayers: 4,

    endIf: endIf,
};