import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Nanum+Pen+Script&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          {/* <Script
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=247677513437e93adfdda6da85ee9abf"
            strategy="beforeInteractive"
            onLoad={() => {
              console.log('kakao loaded');
            }}
          ></Script> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
