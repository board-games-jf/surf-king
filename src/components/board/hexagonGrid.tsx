import { FC, MouseEventHandler, ReactNode } from 'react'
import Space from '../space/styles'
import HaxagonGridRow from './styles'
import { HexagonCell } from '.'
import { Cell } from '../../game/Board'

interface Props {
  cells: Cell[]
  size: number
  space: number
  onHexagonClick: () => void
}

const HexagonGrid: FC<Props> = (props): JSX.Element => {
  const { cells, size, space, onHexagonClick } = props

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
    let hexagonKey = 0
    const rows = Object.keys(gridMap).map((key) => (
      <HaxagonGridRow key={'row_' + rowKey++} first={key === '1'} space={key === '1' ? 0 : -space}>
        {gridMap[Number(key)].items.map((item: string) => {
          if (item === 'S') {
            return <Space key={'space_' + spaceKey++} value={space} />
          }
          return (
            <HexagonCell
              key={'hexagon_' + (hexagonKey + 1)}
              cell={cells[hexagonKey++]}
              size={size}
              type={item === 'HE' ? 'end' : 'normal'}
            />
          )
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
        <button onClick={onHexagonClick}>*</button>
        <div>{rows}</div>
      </div>
    )
  }

  return <>{renderGrid(size, space)}</>
}

export default HexagonGrid
