import { Player } from '.'
import { Obstacle } from './Obstacle'

export const GRID_SIZE = 53

export interface Cell {
  obstacle?: Obstacle
  position: number
  player?: Player
}
