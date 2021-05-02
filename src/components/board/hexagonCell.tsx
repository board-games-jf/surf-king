import { FC } from 'react'
import { Cell } from '../../game/Board'

interface Props {
  cell: Cell
  size: number
  type: 'normal' | 'end'
}

const HexagonCell: FC<Props> = (props): JSX.Element => {
  const { cell: data, size, type } = props
  const bgImg = type === 'end' ? 'url(/media/board/hexagon-end.png)' : 'url(/media/board/hexagon.png)'

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: bgImg,
        backgroundSize: size,
        width: size,
        height: size,
      }}
    >
      {data.obstacle && <span>{data.obstacle?.name}</span>}
      {data.player && <span>{data.player?.position}</span>}
    </div>
  )
}

export default HexagonCell
