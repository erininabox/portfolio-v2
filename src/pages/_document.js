import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="Erin Halden Portfolio" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X0J5R98E7C" strategy="afterInteractive"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-X0J5R98E7C');
      </Script>
      <script src="https://kit.fontawesome.com/35eb533387.js" crossOrigin="anonymous" strategy='beforeInteractive' async />

      <body className='body__dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
