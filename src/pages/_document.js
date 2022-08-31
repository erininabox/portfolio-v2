import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="Erin Halden Portfolio" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script src="https://kit.fontawesome.com/35eb533387.js" crossorigin="anonymous" strategy='beforeInteractive' />

      <body className='body__dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
