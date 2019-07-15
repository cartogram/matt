import App, {Container} from 'next/app';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from '../styles';

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
