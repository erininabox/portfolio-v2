import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="Erin Halden Portfolio" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-X0J5R98E7C"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-X0J5R98E7C');
      </script>
      <script src="https://kit.fontawesome.com/35eb533387.js" crossOrigin="anonymous" strategy='beforeInteractive' async />

      <body className='body__dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
