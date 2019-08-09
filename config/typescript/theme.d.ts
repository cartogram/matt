import 'styled-components';

interface Breakpoint {
  [key: string]: string;
}

declare module 'styled-components' {
  interface Tyography {}
  export interface DefaultTheme {
    emSizes: string[];
    remSizes: string[];
    siteBackgroundColor: string;
    fontFamilySans: {
      name: string;
      weight: number;
    };
    fontSizes: string[];
    siteBackground: string;
    primaryColor: string;
    emBase: number;
    timing: string[];
    colors: {
      [key: string]: string | string[];
    };
    images: any;
    easing: any;
    breakpoints: Breakpoint;
  }
}
