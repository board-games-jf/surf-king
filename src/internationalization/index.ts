import _ from 'lodash'
import axios from 'axios'
import intl from 'react-intl-universal'

export const SUPPORT_LOCALES = [
  {
    name: 'English',
    value: 'en-US',
  },
  {
    name: 'Português',
    value: 'pt-BR',
  },
  {
    name: 'Cearensês',
    value: 'ce-BR',
  },
]

export const loadLanguage = async (): Promise<boolean> => {
  let currentLocale = intl.determineLocale({
    urlLocaleKey: 'lang',
    cookieLocaleKey: 'lang',
  })

  if (!_.find(SUPPORT_LOCALES, { value: currentLocale })) {
    currentLocale = 'en-US'
  }

  let ok = false

  await axios.get(`locales/${currentLocale}.json`).then((res) => {
    try {
      intl.init({
        currentLocale,
        locales: {
          [currentLocale]: res.data,
        },
      })
      ok = true
    } catch (e) {
      // TODO: Log better.
      console.log('loadLanguage::axios::error', e)
    }
  })
  return ok
}

export const AUTHENTICATION_SIGNIN = 'authentication.signin'
export const AUTHENTICATION_SIGNOUT = 'authentication.signout'

export const intlAuthenticationSignIn = (): string => {
  return intl.get(AUTHENTICATION_SIGNIN)
}
export const intlAuthenticationSignOut = (): string => {
  return intl.get(AUTHENTICATION_SIGNOUT)
}
