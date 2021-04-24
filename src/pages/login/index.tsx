import { Button, Col, Row } from 'antd'
import Image from 'next/image'
import Media from 'react-media'
import { GLOBAL_MEDIA_QUERIES } from '../../app-constants'
import Space from '../../components/space/style'
import { intlValue, PLAY_MODE_LOCAL, PLAY_MODE_ONLINE } from '../../internationalization'

const Login = (): JSX.Element => {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {(matches) => (
        <>
          {matches.small && (
            <Image src="/media/login-bg-small.png" alt="background" layout="fill" objectFit="cover" quality={100} />
          )}
          {!matches.small && (
            <>
              <Image src="/media/login-bg.png" alt="background" layout="fill" objectFit="cover" quality={100} />
              <Row style={{ lineHeight: '100vh' }}>
                <Col span={6} offset={5} style={{ textAlign: 'center' }}>
                  <Button style={{ height: 95, fontSize: 30, fontWeight: 'bold', padding: '0 16px' }} type="primary" shape="round">
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <Image src="/media/svg/crab.svg" width={70} height={70} />
                      <Space value={16} />
                      {intlValue(PLAY_MODE_LOCAL)}
                    </div>
                  </Button>
                </Col>
                <Col span={6} offset={1} style={{ textAlign: 'center' }}>
                  <Button style={{ height: 95, fontSize: 30, fontWeight: 'bold', padding: '0 16px' }} type="primary" shape="round">
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <Image src="/media/svg/penguim.svg" width={70} height={70} />
                      <Space value={16} />
                      {intlValue(PLAY_MODE_ONLINE)}
                    </div>
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </>
      )}
    </Media>
  )
}

export default Login
