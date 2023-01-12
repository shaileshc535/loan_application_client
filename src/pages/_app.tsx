import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '../shared/store';
import { Toast } from '../shared/ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toast />
    </>
  );
}

export default wrapper.withRedux(MyApp);
