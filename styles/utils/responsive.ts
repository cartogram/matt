import {css} from 'styled-components';

interface Breakpoint {
  [key: string]: string;
}

interface RespondTo {
  [key: string]: (...args: any[]) => any;
}

export const breakpoints: Breakpoint = {
  xs: '480px',
  sm: '800px',
  md: '1000px',
  lg: '1200px',
};

export const respondTo: RespondTo = Object.keys(breakpoints).reduce(
  (accumulator: {[key: string]: (...args: any[]) => any}, label: string) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${(css as any)(...args)};
      }
    `;
    return accumulator;
  },
  {},
);
