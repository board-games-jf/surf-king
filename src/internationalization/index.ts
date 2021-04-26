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

export const intlValue = (key: string): string => {
  return intl.get(key)
}

////////////////////////////////////////////////////////////////////////////////
// Authentication
////////////////////////////////////////////////////////////////////////////////
export const AUTHENTICATION_SIGNIN = 'authentication.signin'
export const AUTHENTICATION_SIGNOUT = 'authentication.signout'

////////////////////////////////////////////////////////////////////////////////
// Play Mode
////////////////////////////////////////////////////////////////////////////////
export const PLAY_MODE_LOCAL = 'play.mode.local'
export const PLAY_MODE_ONLINE = 'play.mode.online'

////////////////////////////////////////////////////////////////////////////////
// Titles
////////////////////////////////////////////////////////////////////////////////
export const TITLE_EVENTS = 'title.events'
export const TITLE_BATTLE = 'title.battle'
export const TITLE_RANKING = 'title.ranking'
export const TITLE_PROFILE = 'title.profile'
