import { Server } from 'boardgame.io/server';
import { DEFAULT_API_PORT, DEFAULT_PORT } from "../config";

// import SurfKingGame from '../game/SurfKingGame.ts'

const PORT = Number(process.env.PORT || DEFAULT_PORT);
const API_PORT = Number(process.env.API_PORT || DEFAULT_API_PORT);

const server = Server({ games: [] });

const lobbyConfig = {
    apiPort: API_PORT,
    apiCallback: () => console.log(`Running Lobby API on port ${API_PORT}...`),
};

server.run({ port: PORT, lobbyConfig }, () => {
    console.log(`Serving at: http://localhost:${PORT}/`);
})