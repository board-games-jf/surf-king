import { FC } from 'react'
import { Button, Image } from 'antd'
import { intlValue, PLAY_MODE_LOCAL, PLAY_MODE_ONLINE } from '../../internationalization'
import Space from '../space/style'
import { buttonContentStyle, buttonSmallContentStyle, buttonSmallStyle, buttonStyle } from './style'

interface PlayModeButtonProps {
  small: boolean
  mode: 'local' | 'online'
}

const PlayModeButton: FC<PlayModeButtonProps> = (props): JSX.Element => {
  const { small, mode } = props

  return (
    <Button style={small ? buttonSmallStyle : buttonStyle} type="primary" shape="round">
      <div style={small ? buttonSmallContentStyle : buttonContentStyle}>
        {mode === 'local' && <Image src="/media/svg/crab.svg" width={70} height={70} preview={false} />}
        {mode === 'online' && <Image src="/media/svg/penguim.svg" width={70} height={70} preview={false} />}

        <Space value={16} />

        {mode === 'local' && intlValue(PLAY_MODE_LOCAL)}
        {mode === 'online' && intlValue(PLAY_MODE_ONLINE)}
      </div>
    </Button>
  )
}

export default PlayModeButton
