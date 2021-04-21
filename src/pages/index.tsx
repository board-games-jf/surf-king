import { useState, useEffect, ReactNode } from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/client'

import { loadLanguage } from '../internationalization'

import Login from './login'
import Lobby from './lobby'
import Header from '../components/header'

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
      <div
        style={{
          minHeight: '100vh',
          padding: '0 0.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Head>
          <title>Surf King Game</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Surf King Game" />
        </Head>

        <Header />

        <main
          style={{
            padding: '5rem 0',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!session && <Login />}

          {session && <Lobby />}
        </main>

        <footer></footer>
      </div>
    )
  )
}
