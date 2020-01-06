import App from 'next/app';
import Router from 'next/router';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from '../styles';

import {LoadBar} from '../components';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
});
interface State {
  loading: boolean;
}

export default class MyApp extends App {
  state: State = {
    loading: false,
  };

  componentDidMount() {
    Router.events.on('routeChangeStart', url => {
      console.log(`Loading: ${url}`);
      this.setState({loading: true});
    });
    Router.events.on('routeChangeComplete', url => {
      console.log(`Done Loading: ${url}`);
      setTimeout(() => this.setState({loading: false}), 1000);
    });
    Router.events.on('routeChangeError', url => {
      console.log(`Error Loading: ${url}`);
      this.setState({loading: false});
    });
  }

  render() {
    const {Component, pageProps} = this.props;
    const {loading} = this.state;

    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <LoadBar active={loading} />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </>
    );
  }
}
