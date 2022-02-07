import {createGlobalStyle} from 'styled-components';

import theme from './theme';
import {reset, respond} from './utils';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Sizes that the rest of our system will be based on */
    --ft-screen-width: 1440;
    --ft-body: 20;
    --ft-body-min: 1.2rem; /* Going this small for demo purposes */
    --ft-body-max: 4rem;
    --ft-body-vw: calc(var(--ft-body) / var(--ft-screen-width) * 100vw);

    /* Body, 20px on 1440px screens */
    --ft-size-body: clamp(var(--ft-body-min), var(--ft-body-vw), var(--ft-body-max));

    /* Heading, 40 on 1440px screens */
    --ft-heading: 40;
    --ft-size-heading: clamp(var(--ft-body-min) * (var(--ft-heading) / var(--ft-body)), var(--ft-body-vw) * (var(--ft-heading) / var(--ft-body)), var(--ft-body-max) * (var(--ft-heading) / var(--ft-body)));

    /* Small, 20 on 1440px screens */
    --ft-small: 20;
    --ft-size-small: clamp(var(--ft-body-min) * (var(--ft-small) / var(--ft-body)), var(--ft-body-vw) * (var(--ft-small) / var(--ft-body)), var(--ft-body-max) * (var(--ft-small) / var(--ft-body)));

    /* medium, 26 on 1440px screens */
    --ft-medium: 26;
    --ft-size-medium: clamp(var(--ft-body-min) * (var(--ft-medium) / var(--ft-body)), var(--ft-body-vw) * (var(--ft-medium) / var(--ft-body)), var(--ft-body-max) * (var(--ft-medium) / var(--ft-body)));



    /* Fonts */

    /* Colors */
    --accent-color: blue;
  }

  html,
  body,
  body > div {
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    --space-1rem: 1em;
    font-family: ${theme.fontFamilySans.name};
    font-weight: ${theme.fontFamilySans.weight};
    font-size: var(--ft-size-body);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.5em;

    @media ${respond.sm} {
      padding: 3em 5em;
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
