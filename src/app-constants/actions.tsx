import { Battle, Events, Profile, Ranking } from './icons'
import { Avatar, Image } from 'antd'
import { intlValue, TITLE_BATTLE, TITLE_EVENTS, TITLE_PROFILE, TITLE_RANKING } from '../internationalization'

export interface IAction {
  icon: React.ReactNode
  title: string
  name: string
  url: string
}

const actions = (userImage: string | undefined, iconSize = 32): IAction[] => {
  return [
    {
      icon: Events(iconSize),
      title: intlValue(TITLE_EVENTS),
      name: 'events',
      url: 'events',
    },
    {
      icon: Battle(iconSize),
      title: intlValue(TITLE_BATTLE),
      name: 'battle',
      url: 'battle',
    },
    {
      icon: Ranking(iconSize),
      title: intlValue(TITLE_RANKING),
      name: 'ranking',
      url: 'ranking',
    },
    {
      icon: userImage ? <Avatar size={40} src={<Image src={userImage} preview={false} />} /> : Profile(iconSize),
      title: intlValue(TITLE_PROFILE),
      name: 'profile',
      url: 'profile',
    },
  ]
}

export default actions
