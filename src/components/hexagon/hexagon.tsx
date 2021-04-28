import { FC } from 'react'
import { Image } from 'antd'

interface IProps {
  size: number
  type: 'normal' | 'end'
}

const Hexagon: FC<IProps> = (props): JSX.Element => {
  const { size, type } = props

  return (
    <>
      {type === 'normal' && <Image src="/media/board/hexagon.png" width={size} preview={false} />}
      {type === 'end' && <Image src="/media/board/hexagon-end.png" width={size} preview={false} />}
    </>
  )
}

export default Hexagon
