import { Col, Row } from 'antd'
import Image from 'next/image'
import Media from 'react-media'
import { GLOBAL_MEDIA_QUERIES } from '../../app-constants'
import PlayModeButton from '../../components/playModeButton'

const Login = (): JSX.Element => {
  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {(matches) => (
        <>
          {matches.small && (
            <>
              <Image src="/media/login-bg-small.png" alt="background" layout="fill" objectFit="cover" quality={100} />

              <Row style={{ lineHeight: '100vh' }}>
                <Col span={6} offset={5} style={{ textAlign: 'center' }}>
                  <PlayModeButton mode="local" small />
                </Col>
                <Col span={6} offset={2} style={{ textAlign: 'center' }}>
                  <PlayModeButton mode="online" small />
                </Col>
              </Row>
            </>
          )}
          {!matches.small && (
            <>
              <Image src="/media/login-bg.png" alt="background" layout="fill" objectFit="cover" quality={100} />

              {matches.medium && (
                <div style={{ marginTop: 200 }}>
                  <Row>
                    <Col span={16} offset={4} style={{ textAlign: 'center' }}>
                      <PlayModeButton mode="local" />
                    </Col>
                  </Row>
                  <div style={{ marginTop: 16 }} />
                  <Row>
                    <Col span={16} offset={4} style={{ textAlign: 'center' }}>
                      <PlayModeButton mode="online" />
                    </Col>
                  </Row>
                </div>
              )}

              {matches.large && (
                <Row style={{ lineHeight: '100vh' }}>
                  <Col span={6} offset={5} style={{ textAlign: 'center' }}>
                    <PlayModeButton mode="local" />
                  </Col>
                  <Col span={6} offset={2} style={{ textAlign: 'center' }}>
                    <PlayModeButton mode="online" />
                  </Col>
                </Row>
              )}
            </>
          )}
        </>
      )}
    </Media>
  )
}

export default Login
