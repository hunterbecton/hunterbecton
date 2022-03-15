import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' href='https://use.typekit.net/hoj6edb.css' />
        </Head>
        <body className='bg-zinc-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
