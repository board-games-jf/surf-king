import { FC } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

import { AUTHENTICATION_SIGNIN, AUTHENTICATION_SIGNOUT, intlValue, SUPPORT_LOCALES } from '../../internationalization'

import { Avatar, Button, Col, Image, Menu, Row, Select } from 'antd'
import { valueType } from 'antd/lib/statistic/utils'
import { UserOutlined } from '@ant-design/icons'

import { HeaderContent, LoginArea, LogoArea } from './styles'
import actions from '../../app-constants/actions'
import Space from '../space/style'

const { Option } = Select

interface IProps {
  onSelectLocale: (value: valueType) => void
  onSignInClicked: () => void
  onSignOutClicked: () => void
}

const HeaderGeneral: FC<IProps> = (props): JSX.Element => {
  const [session] = useSession()

  const userImage = session?.user?.image

  const renderLocaleSelector = (): JSX.Element => {
    return (
      <Select style={{ width: 100 }} defaultValue="" onChange={props.onSelectLocale}>
        {SUPPORT_LOCALES.map((locale) => (
          <Option key={locale.name} value={locale.value}>
            {locale.name}
          </Option>
        ))}
      </Select>
    )
  }

  const menuItems = actions(session?.user?.image || undefined, 18)
  menuItems.splice(-1, 1)

  return (
    <HeaderContent>
      <Row>
        <Col span={5}>
          <LogoArea>
            <Image src="/media/logo.png" width={100} preview={false} />
            <Space value={8} />
            <h2>Surf King</h2>
          </LogoArea>
        </Col>

        <Col span={14}>
          <Menu style={{ lineHeight: '100px' }} mode="horizontal" defaultSelectedKeys={[menuItems[0].name]}>
            {menuItems.map((item) => (
              <Menu.Item key={item.name} icon={item.icon}>
                {item.title}
              </Menu.Item>
            ))}
          </Menu>
        </Col>

        <Col span={5}>
          <LoginArea>
            {!session && (
              <div>
                <Link href="/api/auth/signin">
                  <Button type="primary" shape="round" onClick={props.onSignInClicked}>
                    {intlValue(AUTHENTICATION_SIGNIN)}
                  </Button>
                </Link>
              </div>
            )}

            {session && (
              <>
                {!userImage && <Avatar style={{ background: '#CCCCCC' }} size={40} icon={<UserOutlined />} />}
                {userImage && <Avatar size={40} src={<Image src={userImage} preview={false} />} />}

                <Space value={8} />

                <Link href="/api/auth/sgnout">
                  <Button type="primary" shape="round" onClick={props.onSignOutClicked}>
                    {intlValue(AUTHENTICATION_SIGNOUT)}
                  </Button>
                </Link>
              </>
            )}

            <Space value={8} />

            {renderLocaleSelector()}
          </LoginArea>
        </Col>
      </Row>
    </HeaderContent>
  )
}

export default HeaderGeneral
