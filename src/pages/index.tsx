import { useState, useEffect, ReactNode } from 'react'

import { useSession } from 'next-auth/client'

import { loadLanguage } from '../internationalization'

import Login from './login'
import Lobby from './lobby'
import HeaderContent from '../components/header'

import { Layout } from 'antd'

const { Header, Content } = Layout

export default function Home(): ReactNode {
  const [session] = useSession()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(!(await loadLanguage()))
      } catch (e) {
        // TODO: Log better.
        console.log('Home:useEffect:::error', e)
      }
    })()
  }, [])

  return (
    !loading && (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: 'white', height: 100 }}>
          <HeaderContent />
        </Header>

        <Content>
          {!session && <Login />}
          {session && <Lobby />}
        </Content>
      </Layout>
    )
  )
}
