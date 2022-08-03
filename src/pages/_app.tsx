import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avancado - BoilerPlate</title>
        <link rel="shortcut icon" href="/img/shortcut.png" />
        <link rel="apple-touch-icon" href="/img/apple.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
