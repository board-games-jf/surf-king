import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import { Col, Row } from 'antd'
import Media from 'react-media'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import { Client } from 'boardgame.io/react'

import { DEFAULT_DEBUG } from '../../app-constants'

import board from '../../board'
import { SurfKingGame } from '../../game'
import { HexagonGrid } from '../../components/hexagon'

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

  const renderResponsiveMenu = ({ zoomIn, zoomOut, resetTransform }: ZoomProps): JSX.Element => {
    return (
      <>
        Menu - {id}
        <SurfKingClient />
        <div>
          <button onClick={zoomIn}>+</button>
          <button onClick={zoomOut}>-</button>
          <button onClick={resetTransform}>x</button>
        </div>
      </>
    )
  }

  const renderFloatMenu = ({ zoomIn, zoomOut, resetTransform }: ZoomProps): JSX.Element => {
    return (
      <div style={{ position: 'fixed', top: 0, right: 0, display: 'flex', height: '100vh', border: '1px solid blue' }}>
        Menu - {id}
        <SurfKingClient />
        <div>
          <button onClick={zoomIn}>+</button>
          <button onClick={zoomOut}>-</button>
          <button onClick={resetTransform}>x</button>
        </div>
      </div>
    )
  }

  const render = (span: number, offset: number, size: number, space: number): JSX.Element => {
    return (
      <TransformWrapper defaultScale={1} defaultPositionX={0} defaultPositionY={0}>
        {({ zoomIn, zoomOut, resetTransform }: ZoomProps) => (
          <>
            <Row>
              <Col
                span={span}
                offset={offset}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid red',
                  overflow: 'hidden',

                  height: '100vh',

                  backgroundImage: 'url(/media/board/background.png)',
                  backgroundRepeat: 'repeat',
                }}
              >
                <div>
                  <TransformComponent>
                    <HexagonGrid size={size} space={space} />
                  </TransformComponent>
                </div>
              </Col>
              {offset >= 4 && (
                <Col span={4} style={{ border: '1px solid blue' }}>
                  {renderResponsiveMenu({ zoomIn, zoomOut, resetTransform })}
                </Col>
              )}
            </Row>

            {offset === 0 && renderFloatMenu({ zoomIn, zoomOut, resetTransform })}
          </>
        )}
      </TransformWrapper>
    )
  }

  return (
    !session && (
      <Media
        queries={{
          small: '(max-width: 979px)',
          medium: '(min-width: 980px) and (max-width: 1279px)',
          large: '(min-width: 1280px) and (max-width: 1919px)',
          xlarge: '(min-width: 1920px)',
        }}
      >
        {(matches) => (
          <>
            {matches.small && render(24, 0, 90, 50)}
            {matches.medium && render(16, 4, 100, 56)}
            {matches.large && render(12, 6, 110, 61)}
            {matches.xlarge && render(12, 6, 120, 66)}
          </>
        )}
      </Media>
    )
  )
}

export default Lobby
