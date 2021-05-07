import { ReactNode } from 'react'

import { Client } from 'boardgame.io/react'

import { DEFAULT_DEBUG } from '../../app-constants'

import board from '../../components/board/board'
import { SurfKingGame } from '../../game'

const SurfKingClient = Client({
  game: SurfKingGame,
  board,
  debug: process.env.DEBUG || DEFAULT_DEBUG ? true : false,
  // multiplayer: { server: process.env.REACT_APP_SERVER },
})

const Board = (): ReactNode => {
  return <SurfKingClient />
}

export default Board
