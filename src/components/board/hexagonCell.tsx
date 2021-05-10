import React, { FC } from 'react'
import { Cell } from '../../game/Board'

interface Props {
  cell: Cell
  size: number
  type: 'normal' | 'end'
}

class HexagonCell extends React.Component<Props & React.HTMLProps<HTMLButtonElement>> {
  render(): JSX.Element {
    const { cell: data, size, type } = this.props
    const bgImg = type === 'end' ? 'url(/media/board/hexagon-end.png)' : 'url(/media/board/hexagon.png)'
    return (
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: bgImg,
          backgroundSize: size,
          width: size,
          height: size,

          backgroundColor: 'transparent',
          border: 0,
          padding: 0,
          margin: 0,
        }}
        onClick={this.props.onClick}
      >
        {data.obstacle && <span>{data.obstacle?.name}</span>}
        {data.player && <span>{data.player?.position}</span>}
      </button>
    )
  }
}

export default HexagonCell
