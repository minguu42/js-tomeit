import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
