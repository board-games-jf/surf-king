import { Button, Col, Row } from 'antd'
import Image from 'next/image'
import { CSSProperties } from 'react'
import Media from 'react-media'
import { GLOBAL_MEDIA_QUERIES } from '../../app-constants'
import Space from '../../components/space/style'
import { intlValue, PLAY_MODE_LOCAL, PLAY_MODE_ONLINE } from '../../internationalization'

const buttonStyle: CSSProperties = { height: 95, width: 356, fontSize: 30, fontWeight: 'bold' }
const buttonContentStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 8px',
}

const Login = (): JSX.Element => {
  const CrabImage = <Image src="/media/svg/crab.svg" width={70} height={70} />
  const PenguimImage = <Image src="/media/svg/penguim.svg" width={80} height={80} />

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

              {matches.medium && (
                <div style={{ marginTop: 200 }}>
                  <Row>
                    <Col span={16} offset={4} style={{ textAlign: 'center' }}>
                      <Button style={buttonStyle} type="primary" shape="round">
                        <div style={buttonContentStyle}>
                          {CrabImage}
                          <Space value={16} />
                          {intlValue(PLAY_MODE_LOCAL)}
                        </div>
                      </Button>
                    </Col>
                  </Row>
                  <div style={{ marginTop: 16 }} />
                  <Row>
                    <Col span={16} offset={4} style={{ textAlign: 'center' }}>
                      <Button style={buttonStyle} type="primary" shape="round">
                        <div style={buttonContentStyle}>
                          {PenguimImage}
                          <Space value={16} />
                          {intlValue(PLAY_MODE_ONLINE)}
                        </div>
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}

              {matches.large && (
                <Row style={{ lineHeight: '100vh' }}>
                  <Col span={6} offset={5} style={{ textAlign: 'center' }}>
                    <Button style={buttonStyle} type="primary" shape="round">
                      <div style={buttonContentStyle}>
                        {CrabImage}
                        <Space value={16} />
                        {intlValue(PLAY_MODE_LOCAL)}
                      </div>
                    </Button>
                  </Col>
                  <Col span={6} offset={2} style={{ textAlign: 'center' }}>
                    <Button style={buttonStyle} type="primary" shape="round">
                      <div style={buttonContentStyle}>
                        {PenguimImage}
                        <Space value={16} />
                        {intlValue(PLAY_MODE_ONLINE)}
                      </div>
                    </Button>
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
