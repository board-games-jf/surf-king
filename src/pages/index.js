import Head from 'next/head'
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

import board from "../Board"
import { SurfKingGame } from "../game"
import { Client } from 'boardgame.io/react';
import { DEFAULT_DEBUG } from '../config';

import styles from '../styles/Home.module.css'

const SurfKingClient = Client({
  game: SurfKingGame,
  board,
  debug: process.env.DEBUG || DEFAULT_DEBUG,
  // multiplayer: { server: process.env.REACT_APP_SERVER },
});

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Surf King Game</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Surf King Game"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div>
          <SurfKingClient playerID="0" />
        </div>

        {!session && (
          <div>
            <Link href="/api/auth/signin">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign In
              </button>
            </Link>
          </div>
        )}
        {session && (
          <div>
            <Link href="/api/auth/signout">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </button>
            </Link>
            <span>{session.user.email}</span>
          </div>
        )}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
