import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/public/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/beyond-nuria-v2/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/beyond-nuria-v2/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/beyond-nuria-v2/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
