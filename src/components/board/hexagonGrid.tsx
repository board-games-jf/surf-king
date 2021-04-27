import { Image } from 'antd'
import { ReactNode, useEffect } from 'react'
import Space from '../space/styles'
import HaxagonGridRow from './styles'

const HexagonGrid = (): JSX.Element => {
  const size = 120
  const space = 66

  const gridMap = {
    1: {
      items: ['I', 'S', 'I', 'S', 'I', 'S', 'I'],
    },
    5: {
      items: ['I', 'S', 'I', 'S', 'I'],
    },
    8: {
      items: ['I', 'S', 'I', 'S', 'I', 'S', 'I'],
    },
    12: {
      items: ['I', 'S', 'I', 'S', 'I'],
    },
    15: {
      items: ['I', 'S', 'I', 'S', 'I', 'S', 'I'],
    },
    19: {
      items: ['I', 'S', 'I', 'S', 'I'],
    },
    22: {
      items: ['I', 'S', 'I', 'S', 'I', 'S', 'I'],
    },
    26: {
      items: ['I', 'S', 'I', 'S', 'I'],
    },
    29: {
      items: ['I', 'S', 'I', 'S', 'I', 'S', 'I'],
    },
    33: {
      items: ['I', 'S', 'I', 'S', 'I'],
    },
    36: {
      items: ['I', 'S', 'I', 'S', 'I', 'S', 'I'],
    },
    40: {
      items: ['I', 'S', 'I', 'S', 'I'],
    },
    43: {
      items: ['I', 'S', 'I', 'S', 'I', 'S', 'I'],
    },
    47: {
      items: ['I', 'S', 'I', 'S', 'I'],
    },
    50: {
      items: ['I', 'S', 'I', 'S', 'I', 'S', 'I'],
    },
  }

  const renderGrid = (): ReactNode => {
    let spaceKey = 1
    let rowKey = 1
    const rows = Object.keys(gridMap).map((key) => (
      <HaxagonGridRow key={'row_' + rowKey++} first={key === '1'} space={key === '1' ? 0 : -space}>
        {gridMap[key].items.map((item: string) => {
          if (item === 'I') {
            if (key === '50' || key === '51' || key === '52' || key === '53') {
              return <Image src="/media/board/hexagon-end.png" width={size} preview={false} />
            } else {
              return <Image src="/media/board/hexagon.png" width={size} preview={false} />
            }
          }
          return <Space key={'space_' + spaceKey++} value={space} />
        })}
      </HaxagonGridRow>
    ))
    console.log('eita!')
    return rows
  }

  return <>{renderGrid()}</>
}

export default HexagonGrid
