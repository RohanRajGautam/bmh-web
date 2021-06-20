// MEDIA QUERY MANAGER
/*
0 - 600px:      Phone
600 - 960px:    Tablet portrait
960 - 1280px:   Tablet landscape
[1280 - 1920] is where our normal styles apply
1920px + :      Big desktop

$breakpoint arguement choices:
- phone (sm)
- tab-port (md)
- tab-land (lg)
- big-desktop (xl)
 
1em = 16px
*/

export const breakpoints = {
  sm: 37.5,
  md: 60,
  lg: 80,
  xl: 120,
};

export const mediaQueries = key => {
  return style => `@media (max-width: ${breakpoints[key]}em) { ${style} }`;
};
