import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css"
        />
        <Script src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
