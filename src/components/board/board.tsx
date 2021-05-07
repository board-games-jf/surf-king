import { Col, Row } from 'antd'
import { BoardProps } from 'boardgame.io/react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { FC } from 'react'
import Media from 'react-media'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { G } from '../../game'
import HexagonGrid from './hexagonGrid'

interface ZoomProps {
  zoomIn: () => void
  zoomOut: () => void
  resetTransform: () => number
}

interface Props extends BoardProps {
  G: G
}

const Board: FC<Props> = (props): JSX.Element => {
  const [session] = useSession()
  const router = useRouter()

  const { id } = router.query

  const renderResponsiveMenu = ({ zoomIn, zoomOut, resetTransform }: ZoomProps): JSX.Element => {
    return (
      <>
        Menu - {id}
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
                    <HexagonGrid G={props.G} size={size} space={space} />
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
          {(matches) => (
            <>
              {matches.small && render(24, 0, 80, 46)}
              {matches.medium && render(16, 4, 90, 51)}
              {matches.large && render(12, 6, 100, 56)}
              {matches.xlarge && render(12, 6, 110, 61)}
            </>
          )}
        </Media>
      )}
    </>
  )
}

export default Board
