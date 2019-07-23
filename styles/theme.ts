import {DefaultTheme} from 'styled-components';
import {emBase, emCalc, remCalc} from './utils';

const colors = {
  white: 'white',
  black: '#151515',
  blue: 'blue',
  brownSugar: '#CE3E0E',
  mint: '#83C69A',
  grey: ['#EFEFEF', '#E4E4E4', '#AAAAAA'],
};

const timingBase = 400;

const timing = Array.from(
  {length: 10},
  (_, index) => `${(index + 1) * timingBase}ms`,
);

const easing = {
  easeInOutQuint: `cubic-bezier(0.86, 0, 0.07, 1)`,
};

const images = {
  background: '/static/images/noise.png',
};

const baseSize = 8;

const halfSizes = Array.from(
  {length: 4},
  (_, index) => (index + 1) * (baseSize / 2),
);

const fullSizes = Array.from(
  {length: 20},
  (_, index) => (index + 1) * baseSize,
);

const sizes = [...halfSizes, ...fullSizes];

const emSizes = sizes.map(emCalc);
const remSizes = sizes.map(remCalc);

const siteBackgroundColor = colors.grey[0];

const theme: DefaultTheme = {
  siteBackgroundColor,
  siteBackground: `url(${images.background}) ${siteBackgroundColor}`,
  primaryColor: colors.black,
  typography: {
    fontFamilyMono: "'ocr-b-std', Inconsolata, menlo, monospace",
    fontFamilySerif: {
      name: "'kepler-std', times, serif",
      weight: 300,
    },
    fontFamilySans: {
      name: 'lausanna',
      // name: 'halyard-text, sans-serif',
      weight: 300,
    },
    fontSize: {
      h1: {
        base: emCalc(30),
      },
      h2: {
        base: emCalc(30),
      },
      h3: {
        base: emCalc(15),
      },
      h4: {
        base: emCalc(18),
      },
      p: {
        base: emCalc(30),
      },
    },
  },
  emBase,
  emSizes,
  remSizes,
  timing,
  colors,
  images,
  easing,
};

export default theme;
