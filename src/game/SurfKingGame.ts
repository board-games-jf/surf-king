import { Ctx, Game } from 'boardgame.io'
import { TurnOrder } from 'boardgame.io/core'
import { Event, G, Player, Position, Result } from '.'
import { Card, SharkCard } from './Card'
import { Cell, GRID_SIZE } from './Board'
import { Obstacle, SharkObstacle } from './Obstacle'

const createPlayer = (position: Position): Player => {
  const cards = new Array<Card>()
  // TODO: will receive 2 random cards
  cards.push(...Array(2).fill(SharkCard))
  return { position, cards, played: false, cellPosition: -1 }
}

const setup = (): G => {
  const players: { [position: string]: Player } = {
    '0': createPlayer(Position.P1),
    '1': createPlayer(Position.P2),
  }

  let order = [Position.P1, Position.P2]
  order = order.sort(() => Math.random() - 0.5)

  const cells = new Array<Cell>(GRID_SIZE)

  // TODO: set player postions according to number of players.
  for (let i = 0; i < 2; ++i) {
    players[order[i]].cellPosition = i + 1
    cells[i + 1] = { position: i + 1, obstacle: undefined, player: players[order[i]] }
  }

  cells[28] = { position: 28, obstacle: SharkObstacle, player: undefined }
  cells[29] = { position: 29, obstacle: SharkObstacle, player: undefined }
  cells[30] = { position: 30, obstacle: SharkObstacle, player: undefined }
  cells[31] = { position: 31, obstacle: SharkObstacle, player: undefined }
  for (let i = 0; i < GRID_SIZE; ++i) {
    if (!cells[i]) {
      cells[i] = { position: i, obstacle: undefined, player: undefined }
    }
  }

  const events = new Array<Event>()

  return { cells, players, events, turn: 0, order }
}

const placeObstacule = (G: G, ctx: Ctx, position: number, obstacle: Obstacle): void => {
  // TODO: Validate
  G.cells[position].obstacle = obstacle
  G.players[ctx.currentPlayer].played = true
}

const movePiece = (G: G, ctx: Ctx, from: number, to: number): void => {
  // TODO: Validate moviment or trigger action
  G.cells[to].player = G.cells[from].player
  G.cells[from].player = undefined
  G.players[ctx.currentPlayer].played = true
  G.players[ctx.currentPlayer].cellPosition = to
}

const resetPlayerPlayed = (G: G): void => {
  Object['values'](G.players).forEach((p) => (p.played = false))
}

const phasePlaceFirstObstaculeOnEnd = (G: G): void => {
  resetPlayerPlayed(G)
  ++G.turn
}

const phaseFirstMoveOnEnd = (G: G): void => {
  resetPlayerPlayed(G)
  ++G.turn
}

const endIf = (G: G): Result | void => {
  // A player wins if he arrives at one of the cells: 50, 51, 52, or 53.
  for (let i = 50; i <= 53; ++i) {
    const cell = G.cells[i]
    if (cell) {
      const player: Player | undefined = cell.player
      if (player) {
        return { winner: player }
      }
    }
  }
}

const everyonePlay = (G: G): boolean => {
  return Object['values'](G.players).every((p) => (p as Player).played === true)
}

export const SurfKingGame: Game<G, Ctx> = {
  name: 'SurfKing',

  setup: setup,

  turn: { order: TurnOrder.CUSTOM_FROM('order') },

  phases: {
    place_first_obstacule: {
      moves: { placeObstacule },
      turn: { moveLimit: 1 },
      onEnd: phasePlaceFirstObstaculeOnEnd,
      endIf: everyonePlay,
      next: 'firt_move_piece',
      start: true,
    },
    firt_move_piece: {
      moves: { movePiece },
      turn: { moveLimit: 1 },
      onEnd: phaseFirstMoveOnEnd,
      endIf: everyonePlay,
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
}
