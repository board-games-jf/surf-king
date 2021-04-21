import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

import { intlAuthenticationSignIn, intlAuthenticationSignOut, SUPPORT_LOCALES } from '../../internationalization'

import { Select } from 'antd'
import { valueType } from 'antd/lib/statistic/utils'

const { Option } = Select

const Header = (): JSX.Element => {
  const [session] = useSession()

  const renderLocaleSelector = (): JSX.Element => {
    return (
      <Select defaultValue="" style={{ width: 120 }} onChange={onSelectLocale}>
        {SUPPORT_LOCALES.map((locale) => (
          <Option key={locale.name} value={locale.value} disabled>
            {locale.name}
          </Option>
        ))}
      </Select>
      // <select onBlur={onSelectLocale} defaultValue="">
      //   <option value="" disabled>
      //     Change Language
      //   </option>
      //   {SUPPORT_LOCALES.map((locale) => (
      //     <option key={locale.value} value={locale.value}>
      //       {locale.name}
      //     </option>
      //   ))}
      // </select>
    )
  }

  const onSelectLocale = (value: valueType): void => {
    // const lang = e.target.value
    window.location.search = `?lang=${value}`
  }

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      {renderLocaleSelector()}

      {!session && (
        <div>
          <Link href="/api/auth/signin">
            <button
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            >
              {intlAuthenticationSignIn()}
            </button>
          </Link>
        </div>
      )}

      {session && (
        <div>
          <Link href="/api/auth/signout">
            <button
              onClick={(e) => {
                e.preventDefault()
                signOut()
              }}
            >
              {intlAuthenticationSignOut()}
            </button>
          </Link>
          <div>
            <span>{session.user.email}</span>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
