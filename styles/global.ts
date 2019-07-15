import {createGlobalStyle} from 'styled-components';
import theme from './theme';
import {reset} from './utils';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div {
    overflow: hidden;
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.typography.fontFamilySerif};
    font-weight: 400;
    line-height: 1.6;
  }
  *,
  *:before,
  *:after {
    ${reset}
  }
`;

export default GlobalStyle;
