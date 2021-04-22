import { FC } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

import { intlAuthenticationSignIn, intlAuthenticationSignOut, SUPPORT_LOCALES } from '../../internationalization'

import { Button, Col, Image, Menu, Row, Select } from 'antd'
import { valueType } from 'antd/lib/statistic/utils'

import { HeaderContent, LoginArea, LogoArea } from './styles'

const { Option } = Select

interface IProps {
  onSelectLocale: (value: valueType) => void
  onSignInClicked: () => void
  onSignOutClicked: () => void
}

const HeaderGeneral: FC<IProps> = (props): JSX.Element => {
  const [session] = useSession()

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

  return (
    <HeaderContent>
      <Row>
        <Col span={5}>
          <LogoArea>
            <Image src="/media/logo.png" width={100} />
            <h2>Surf King</h2>
          </LogoArea>
        </Col>

        <Col span={14}>
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Col>

        <Col span={5}>
          <LoginArea>
            {!session && (
              <div>
                <Link href="/api/auth/signin">
                  <Button type="primary" onClick={props.onSignInClicked}>
                    {intlAuthenticationSignIn()}
                  </Button>
                </Link>
              </div>
            )}

            {session && (
              <div>
                {/* <span>{session.user.email}</span> */}
                <Link href="/api/auth/signout">
                  <Button type="primary" onClick={props.onSignOutClicked}>
                    {intlAuthenticationSignOut()}
                  </Button>
                </Link>
              </div>
            )}

            {renderLocaleSelector()}
          </LoginArea>
        </Col>
      </Row>
    </HeaderContent>
  )
}

export default HeaderGeneral
