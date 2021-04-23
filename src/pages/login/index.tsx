import { Button } from 'antd'
import Image from 'next/image'
import Media from 'react-media'
import { GLOBAL_MEDIA_QUERIES } from '../../app-constants'
import { intlValue, PLAY_MODE_LOCAL } from '../../internationalization'

const Login = (): JSX.Element => {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {(matches) => (
        <>
          {matches.small && (
            <Image src="/media/login-bg-small.png" alt="background" layout="fill" objectFit="cover" quality={100} />
          )}
          {!matches.small && (
            <Image src="/media/login-bg.png" alt="background" layout="fill" objectFit="cover" quality={100} />
          )}
        </>
      )}
    </Media>
  )
}

export default Login
