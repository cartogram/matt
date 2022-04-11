import {DefaultTheme} from 'styled-components';

import {emBase, emCalc, remCalc, breakpoints} from './utils';

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
  background: '/images/noise.png',
};

const radius = '4px';

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
  headingMaxSize: '42px',
  textMaxSize: '20px',
  maxWidth: '2350px',
  siteBackgroundColor,
  siteBackground: `url(${images.background}) ${siteBackgroundColor}`,
  primaryColor: colors.black,
  fontFamilySans: {
    name: 'lausanna',
    weight: 300,
  },
  fontSizes: [emCalc(16), emCalc(22), emCalc(30)],
  emBase,
  emSizes,
  remSizes,
  timing,
  colors,
  images,
  easing,
  breakpoints,
  radius,
};

export default theme;
