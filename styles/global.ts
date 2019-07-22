import {createGlobalStyle} from 'styled-components';
import theme from './theme';
import {reset} from './utils';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div {
    height: 100%;
    overflow: hidden;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.typography.fontFamilySerif.name};
    font-weight: ${theme.typography.fontFamilySerif.weight};
    line-height: 1.6;
  }

  *,
  *:before,
  *:after {
    ${reset}
  }

  @font-face {
    font-family: 'NeueMachina';
    src: url('/static/fonts/NeueMachina-Light.otf');
  }
`;

export default GlobalStyle;
