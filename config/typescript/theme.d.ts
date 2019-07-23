import 'styled-components';

declare module 'styled-components' {
  interface Tyography {}
  export interface DefaultTheme {
    emSizes: string[];
    remSizes: string[];
    typography: Typography;
    siteBackgroundColor: string;
    siteBackground: string;
    primaryColor: string;
    emBase: number;
    timing: string[];
    colors: {
      [key: string]: string | string[];
    };
    images: any;
    easing: any;
  }
}
