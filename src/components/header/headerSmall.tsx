import { Image } from 'antd'
import { EllipseBackground } from './styles'

const HeaderSmall = (): JSX.Element => {
  return (
    <EllipseBackground>
      <h1>Surf</h1>
      <Image src="/media/logo.png" width={100} />
      <h1>King</h1>
    </EllipseBackground>
  )
}

export default HeaderSmall
