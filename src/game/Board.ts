import internal from "node:stream";
import { Player } from ".";
import { Obstacle } from "./Obstacle";

export const GRID_SIZE = 53;

export interface Cell {
    number: number;
    obstacle: Obstacle | undefined;
    player: Player | undefined;
};