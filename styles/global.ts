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
    font-family: ${theme.typography.fontFamilySans.name};
    font-weight: ${theme.typography.fontFamilySans.weight};
    line-height: 1.6;
    font-size: 12px 
    
    @media (min-width: 700px) {
      font-size: 16px
    }
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
