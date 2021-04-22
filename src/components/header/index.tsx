import { signIn, signOut } from 'next-auth/client'

import Media from 'react-media'

import { GLOBAL_MEDIA_QUERIES } from '../../app-constants'

import { valueType } from 'antd/lib/statistic/utils'

import HeaderGeneral from './headerGeneral'
import HeaderSmall from './headerSmall'

const Header = (): JSX.Element => {
  const selectLocaleHandle = (value: valueType): void => {
    window.location.search = `?lang=${value}`
  }

  const signInClickedHandle = (): void => {
    signIn()
  }

  const signOutClickedHandle = (): void => {
    signOut()
  }

  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {(matches) => (
        <>
          {matches.small && <HeaderSmall />}
          {!matches.small && (
            <HeaderGeneral
              onSelectLocale={selectLocaleHandle}
              onSignInClicked={signInClickedHandle}
              onSignOutClicked={signOutClickedHandle}
            />
          )}
        </>
      )}
    </Media>
  )
}

export default Header
