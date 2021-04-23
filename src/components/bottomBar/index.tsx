import { StarOutlined, TrophyOutlined, UserOutlined, ThunderboltOutlined } from '@ant-design/icons'

const BottomBar = (): JSX.Element => {
  const tabs = [
    {
      icon: <StarOutlined style={{ fontSize: 32 }} />,
      title: 'Events',
      name: 'events',
      url: 'events',
    },
    {
      icon: <ThunderboltOutlined style={{ fontSize: 32 }} />,
      title: 'Battle',
      name: 'battle',
      url: 'battle',
    },
    {
      icon: <TrophyOutlined style={{ fontSize: 32 }} />,
      title: 'Ranking',
      name: 'ranking',
      url: 'ranking',
    },
    {
      icon: <UserOutlined style={{ fontSize: 32 }} />,
      title: 'Perfil',
      name: 'profile',
      url: 'profile',
    },
  ]

  return (
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              {tab.icon}
              {tab.title}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default BottomBar
