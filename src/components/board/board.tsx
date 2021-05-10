import { Col, Row } from 'antd'
import { BoardProps } from 'boardgame.io/react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Media from 'react-media'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { Cell } from '../../game/Board'
import { SharkObstacle } from '../../game/Obstacle'
import HexagonGrid from './hexagonGrid'

interface ZoomProps {
  zoomIn: () => void
  zoomOut: () => void
  resetTransform: () => number
}

const Board = ({ G, ctx, moves }: BoardProps): JSX.Element => {
  const [session] = useSession()
  const router = useRouter()

  const { id } = router.query

  const onHexagonClickedHandle = (cell: Cell): void => {
    // TODO: Check if the player who is playing can make the move.
    console.log(G, ctx)
    if (G.turn === 0) {
      moves.placeObstacule(cell.position, SharkObstacle)
    } else if (G.turn === 1) {
      const currentPlayer: number = +ctx.currentPlayer
      moves.movePiece(G.players[currentPlayer].cellPosition, cell.position)
    } else {
      // TODO: Implements
    }
  }

  const MenuButtons = ({ zoomIn, zoomOut, resetTransform }: ZoomProps): JSX.Element => (
    <div>
      <button onClick={zoomIn}>+</button>
      <button onClick={zoomOut}>-</button>
      <button onClick={resetTransform}>x</button>
    </div>
  )

  const renderResponsiveMenu = ({ zoomIn, zoomOut, resetTransform }: ZoomProps): JSX.Element => {
    return (
      <div>
        Menu - {id}
        <MenuButtons zoomIn={zoomIn} zoomOut={zoomOut} resetTransform={resetTransform} />
      </div>
    )
  }

  const renderFloatMenu = ({ zoomIn, zoomOut, resetTransform }: ZoomProps): JSX.Element => {
    return (
      <div style={{ position: 'fixed', top: 0, right: 0, display: 'flex', height: '100vh', border: '1px solid blue' }}>
        Menu - {id}
        <MenuButtons zoomIn={zoomIn} zoomOut={zoomOut} resetTransform={resetTransform} />
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
                    <HexagonGrid cells={G.cells} size={size} space={space} onHexagonClick={onHexagonClickedHandle} />
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
    <>
      {!session && (
        <Media
          queries={{
            small: '(max-width: 979px)',
            medium: '(min-width: 980px) and (max-width: 1279px)',
            large: '(min-width: 1280px) and (max-width: 1919px)',
            xlarge: '(min-width: 1920px)',
          }}
        >
          {(matches) => {
            if (matches.small) {
              return render(24, 0, 80, 46)
            }
            if (matches.medium) {
              return render(16, 4, 90, 51)
            }
            if (matches.large) {
              return render(12, 6, 100, 56)
            }
            return render(12, 6, 110, 61)
          }}
        </Media>
      )}
    </>
  )
}

export default Board
