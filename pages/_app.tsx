import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
