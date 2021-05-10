import { Card } from './Card'
import { Cell } from './Board'
import { SurfKingGame } from './SurfKingGame'

/** Represents the cards of a player. */
export type Cards = Array<Card>

/** Represents the position of a player on a game. */
export enum Position {
  P1 = '0',
  P2 = '1',
  P3 = '2',
  P4 = '3',
}

/** Represents a Player. */
export interface Player {
  cards: Array<Card>
  position: Position
  played: boolean
  cellPosition: number
}

/** Represents the kind of event. */
export enum EventKind {
  PlaceObstacule,
  StandOnBoard,
  UseCard,
  AttackPiece,
  MovePiece,
  ReceiveCard,
}

/** Represents an event. */
export interface Event {
  kind: EventKind
  player: Player
}

/** Represents the game state. Must be serializable. */
export interface G {
  cells: Array<Cell>
  events: Array<Event>
  players: { [position: string]: Player }
  turn: number
  order: Array<string>
}

/** Represents the result of a game. */
export interface Result {
  winner: Player
}

export { SurfKingGame }
