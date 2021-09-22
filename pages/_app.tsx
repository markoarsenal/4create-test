import React, { ReactElement } from 'react';
import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/reset.scss';
import 'styles/style.scss';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
