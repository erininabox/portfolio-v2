import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        <meta name="Erin Halden Portfolio" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script src="https://kit.fontawesome.com/35eb533387.js" crossOrigin="anonymous" strategy='beforeInteractive' async />

      <body className='body__dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
