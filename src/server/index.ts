import { Server } from 'boardgame.io/server';
import { DEFAULT_PORT } from "../config/index.ts";

// import SurfKingGame from './game'

const PORT = Number(process.env.PORT || DEFAULT_PORT);

const server = Server({ games: [] });

server.run(PORT, () => {
    console.log(`Serving at: http://localhost:${PORT}/`);
})