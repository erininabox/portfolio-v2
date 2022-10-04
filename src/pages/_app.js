import '../styles/app.scss';
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  return (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-G7D4BLKJVM`}
    />
    <Script
      id="google-analytics"
      strategy="lazyOnload"
    >
      {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-G7D4BLKJVM');
      `}


    </Script>
    
    <Head>
      <title>Erin Halden&apos;s Portfolio</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
