import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

import { intlAuthenticationSignIn, intlAuthenticationSignOut, SUPPORT_LOCALES } from '../../internationalization'

import { valueType } from 'antd/lib/statistic/utils'
import { Button, Col, Image, Menu, Row, Select } from 'antd'

const { Option } = Select

import { Logo } from './styles'

const Header = (): JSX.Element => {
  const [session] = useSession()

  const onSelectLocale = (value: valueType): void => {
    window.location.search = `?lang=${value}`
  }

  const renderLocaleSelector = (): JSX.Element => {
    return (
      <Select style={{ width: 100 }} defaultValue="" onChange={onSelectLocale}>
        {SUPPORT_LOCALES.map((locale) => (
          <Option key={locale.name} value={locale.value}>
            {locale.name}
          </Option>
        ))}
      </Select>
    )
  }

  const onSignInCliked = (): void => {
    signIn()
  }

  const onSignOutCliked = (): void => {
    signOut()
  }

  return (
    <div>
      <Row>
        <Col span={5}>
          <Logo>
            <Image src="/media/logo.png" width={100} />
            <h2>Surf King</h2>
          </Logo>
        </Col>

        <Col span={14}>
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Col>

        <Col span={5}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {!session && (
              <div>
                <Link href="/api/auth/signin">
                  <Button type="primary" onClick={onSignInCliked}>
                    {intlAuthenticationSignIn()}
                  </Button>
                </Link>
              </div>
            )}

            {/* {session && (
              <div>
                <span>{session.user.email}</span>
              </div>
            )} */}
            {session && (
              <div>
                <Link href="/api/auth/signout">
                  <Button type="primary" onClick={onSignOutCliked}>
                    {intlAuthenticationSignOut()}
                  </Button>
                </Link>
              </div>
            )}

            {renderLocaleSelector()}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Header
