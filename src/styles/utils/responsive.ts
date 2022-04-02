interface Breakpoint {
  [key: string]: string;
}

export const breakpoints: Breakpoint = {
  xs: '480px',
  sm: '700px',
  md: '1250px',
  lg: '1850px',
};

export const respond = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
};
