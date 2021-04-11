import internal from "node:stream";
import { Player } from ".";
import { Obstacle } from "./Obstacle";

export const GRID_SIZE = 53;

export interface Cell {
    obstacle: Obstacle | undefined;
    position: number;
    player: Player | undefined;
};