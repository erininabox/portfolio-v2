import '../styles/app.scss';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Erin Halden's Portfolio</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
