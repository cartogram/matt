import {createGlobalStyle} from 'styled-components';

import theme from './theme';
import {reset, respond} from './utils';

const GlobalStyle = createGlobalStyle`

  html,
  body,
  body > div {
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.fontFamilySans.name};
    font-weight: ${theme.fontFamilySans.weight};
    line-height: 1.4;
    font-size: 2em

    @media ${respond.md} {
      font-size: 1.5em;
    }

    @media ${respond.lg} {
      font-size: 1.2em;
    }
  }

  *,
  *:before,
  *:after {
    ${reset}
  }

  @font-face {
    font-family: 'lausanna';
    src: url('/fonts/Lausanne-300.otf');
  }

  body {
    background: ${theme.siteBackground};
  }
`;

export default GlobalStyle;
