import { AnimatePresence } from 'framer-motion';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/GlobalStyle';
import { MotionConfig } from 'framer-motion';
import isValidProp from '@emotion/is-prop-valid';
import { useRouter } from 'next/router';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider>
      <GlobalStyle />
      <Layout>
        <MotionConfig isValidProp={isValidProp}>
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MotionConfig>
      </Layout>
    </Provider>
  );
}

export default MyApp;
