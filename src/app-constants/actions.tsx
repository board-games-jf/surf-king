import { Battle, Events, Profile, Ranking } from './icons'
import { Avatar, Image } from 'antd'

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
      title: 'Events',
      name: 'events',
      url: 'events',
    },
    {
      icon: Battle(iconSize),
      title: 'Battle',
      name: 'battle',
      url: 'battle',
    },
    {
      icon: Ranking(iconSize),
      title: 'Ranking',
      name: 'ranking',
      url: 'ranking',
    },
    {
      icon: userImage ? <Avatar size={40} src={<Image src={userImage} preview={false} />} /> : Profile(iconSize),
      title: 'Profile',
      name: 'profile',
      url: 'profile',
    },
  ]
}

export default actions
