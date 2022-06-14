import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Script from 'next/script';

const GlobalStyle = createGlobalStyle`
 ${reset};
 *, body {
  font-family: 'Nanum Pen Script', cursive;
 }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}

export default App;
