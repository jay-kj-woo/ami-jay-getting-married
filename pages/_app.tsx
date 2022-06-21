import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import Script from 'next/script';
const GlobalStyle = createGlobalStyle`
 *, body {
  /* font-family: 'Nanum Pen Script', cursive; */
  font-family: 'Gowun Dodum', sans-serif;
  color: #e2e2e2;
  font-size: 14px;
 }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <GlobalStyle />
      {/* <Script src="https://unpkg.com/type-hangul"></Script> */}
      <Component {...pageProps} />
    </>
  );
}

export default App;
