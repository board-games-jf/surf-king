import { FC, ReactNode } from 'react'
import Space from '../space/styles'
import HaxagonGridRow from './styles'
import Hexagon from './hexagon'

interface IProps {
  size: number
  space: number
}

const HexagonGrid: FC<IProps> = (props): JSX.Element => {
  const { size, space } = props

  const gridMap: { [key: number]: { items: string[] } } = {
    1: {
      items: ['HN', 'S', 'HN', 'S', 'HN', 'S', 'HN'],
    },
    5: {
      items: ['HN', 'S', 'HN', 'S', 'HN'],
    },
    8: {
      items: ['HN', 'S', 'HN', 'S', 'HN', 'S', 'HN'],
    },
    12: {
      items: ['HN', 'S', 'HN', 'S', 'HN'],
    },
    15: {
      items: ['HN', 'S', 'HN', 'S', 'HN', 'S', 'HN'],
    },
    19: {
      items: ['HN', 'S', 'HN', 'S', 'HN'],
    },
    22: {
      items: ['HN', 'S', 'HN', 'S', 'HN', 'S', 'HN'],
    },
    26: {
      items: ['HN', 'S', 'HN', 'S', 'HN'],
    },
    29: {
      items: ['HN', 'S', 'HN', 'S', 'HN', 'S', 'HN'],
    },
    33: {
      items: ['HN', 'S', 'HN', 'S', 'HN'],
    },
    36: {
      items: ['HN', 'S', 'HN', 'S', 'HN', 'S', 'HN'],
    },
    40: {
      items: ['HN', 'S', 'HN', 'S', 'HN'],
    },
    43: {
      items: ['HN', 'S', 'HN', 'S', 'HN', 'S', 'HN'],
    },
    47: {
      items: ['HN', 'S', 'HN', 'S', 'HN'],
    },
    50: {
      items: ['HE', 'S', 'HE', 'S', 'HE', 'S', 'HE'],
    },
  }

  const renderGrid = (size: number, space: number): ReactNode => {
    let spaceKey = 1
    let rowKey = 1
    let hexagonKey = 1
    const rows = Object.keys(gridMap).map((key) => (
      <HaxagonGridRow key={'row_' + rowKey++} first={key === '1'} space={key === '1' ? 0 : -space}>
        {gridMap[Number(key)].items.map((item: string) => {
          if (item === 'S') {
            return <Space key={'space_' + spaceKey++} value={space} />
          }
          return <Hexagon key={'hexagon_' + hexagonKey++} size={size} type={item === 'HE' ? 'end' : 'normal'} />
        })}
      </HaxagonGridRow>
    ))
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div>{rows}</div>
      </div>
    )
  }

  return <>{renderGrid(size, space)}</>
}

export default HexagonGrid
