import Head from 'next/head';
import App, {Container} from 'next/app';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from '../styles';

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/swr1nhf.css" />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
