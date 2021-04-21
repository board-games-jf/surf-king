// import '../styles/globals.css'
import { ReactNode } from 'react'
import { Provider } from 'next-auth/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  const { session } = pageProps
  return (
    <Provider
      session={session}
      options={{
        clientMaxAge: 60, // Re-fetch session if cache is older than 60 seconds
        keepAlive: 5 * 60, // Send keepAlive message every 5 minutes
      }}
    >
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
