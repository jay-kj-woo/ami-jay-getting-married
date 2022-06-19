import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Script from 'next/script';
// ${reset};
const GlobalStyle = createGlobalStyle`
 
 *, body {
  font-family: 'Nanum Pen Script', cursive;
 }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      {/* <Script src="https://unpkg.com/type-hangul"></Script> */}
      <Component {...pageProps} />
    </>
  );
}

export default App;
