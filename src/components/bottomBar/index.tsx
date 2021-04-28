import { useSession } from 'next-auth/client'
import { BottomBarItem } from './styles'
import actions from '../../app-constants/actions'
import Media from 'react-media'
import { GLOBAL_MEDIA_QUERIES } from '../../app-constants/media'

const BottomBar = (): JSX.Element => {
  const [session] = useSession()

  const tabs = actions(session?.user?.image || '')

  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {(matches) =>
        matches.small && (
          <div
            style={{
              position: 'fixed',
              bottom: 0,
              width: '100%',
              backgroundColor: '#fff',
              boxShadow: '0px 0px 8px #888',
            }}
          >
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                height: 70,
                fontSize: 13,
              }}
            >
              {tabs.map((tab) => (
                <>
                  <BottomBarItem>
                    {tab.icon}
                    {tab.title}
                  </BottomBarItem>
                </>
              ))}
            </div>
          </div>
        )
      }
    </Media>
  )
}

export default BottomBar
