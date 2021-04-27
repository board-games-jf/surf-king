import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import { Col, Image, Row } from 'antd'

import { Client } from 'boardgame.io/react'

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import { DEFAULT_DEBUG } from '../../app-constants'

import board from '../../board'
import { SurfKingGame } from '../../game'
import RepeatedBackground from './style'
import { HexagonGrid } from '../../components/board'

const SurfKingClient = Client({
  game: SurfKingGame,
  board,
  debug: process.env.DEBUG || DEFAULT_DEBUG ? true : false,
  // multiplayer: { server: process.env.REACT_APP_SERVER },
})

interface ZoomProps {
  zoomIn: () => void
  zoomOut: () => void
  resetTransform: () => number
}

const Lobby = (): ReactNode => {
  const [session] = useSession()
  const router = useRouter()

  const { id } = router.query

  return (
    !session && (
      <Row style={{ border: '1px solid black' }}>
        <Col
          span={12}
          offset={6}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid red' }}
        >
          <TransformWrapper defaultScale={1} defaultPositionX={200} defaultPositionY={100}>
            <TransformComponent>
              <RepeatedBackground />

              {id}
              <SurfKingClient playerID="0" />

              <HexagonGrid />

              <Image src="/media/board/footer.png" preview={false} />
            </TransformComponent>
          </TransformWrapper>
        </Col>
      </Row>
    )
  )
}

export default Lobby
