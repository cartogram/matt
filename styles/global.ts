import {createGlobalStyle} from 'styled-components';

import theme from './theme';
import {reset, respondTo} from './utils';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div {
    height: 100%;
    overflow: hidden;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.fontFamilySans.name};
    font-weight: ${theme.fontFamilySans.weight};
    line-height: 1.6;
    font-size: 2.4vw

    ${respondTo.sm`
      font-size: 2vw
    `}

    ${respondTo.md`
      font-size: 1.1vw
    `}

    ${respondTo.lg`
      font-size: 22px
    `}
  }

  *,
  *:before,
  *:after {
    ${reset}
  }

  @font-face {
    font-family: 'lausanna';
    src: url('/static/fonts/Lausanne-300.otf');
  }
`;

export default GlobalStyle;
