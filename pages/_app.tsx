import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';
import { Reset } from 'styled-reset';
import Script from 'next/script';
import { useEffect } from 'react';
import Head from 'next/head';
const GlobalStyle = createGlobalStyle`
 *, body {
  /* font-family: 'Nanum Pen Script', cursive; */
  font-family: 'Gowun Dodum', sans-serif;
  /* color: #e2e2e2; */
  /* color:#164e45; */
  color: #585858;
  font-size: 14px;
 }

`;

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      groom: string;
      bride: string;
      background: string;
      highlight1: string;
      textBright: string;
    };
  }
}

const myTheme: DefaultTheme = {
  colors: {
    groom: '#78c0e9',
    bride: '#f79e9e',
    background: '#f9f6f1',
    // background: '#cfcfeb',
    // highlight1: '#164e45',
    highlight1: '#036253',
    textBright: '#e2e2e2',
  },
};

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={myTheme}>
        {/* <Script src="https://unpkg.com/type-hangul"></Script> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
