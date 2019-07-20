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
  easeInOutQuint: `cubic-bezier(0.86, 0, 0.07, 1);`,
};

const images = {
  background: '/static/images/noise.png',
};
const sizes = [4, 8, 12, 16, 24, 32, 40];
const emSizes = sizes.map(emCalc);
const remSizes = sizes.map(remCalc);

const theme = {
  siteBackgroundColor: colors.grey[0],
  primaryColor: colors.black,
  typography: {
    fontFamilyMono: "'ocr-b-std', Inconsolata, menlo, monospace",
    fontFamilySerif: "'kepler-std', times, serif",
    fontFamilySans: {
      name: 'halyard-text, sans-serif',
      weight: 300,
    },
    fontSize: {
      h1: {
        base: emCalc(16),
      },
      h2: {
        base: emCalc(24),
      },
      h3: {
        base: emCalc(15),
      },
      h4: {
        base: emCalc(12),
      },
      // eslint-disable-next-line id-length
      p: {
        base: emCalc(24),
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
