import { css } from 'styled-components';

export const breakpoint = {
  // No `sm` prop included because of mobile-first approach.
  md: '40.063rem', // 641px
  lg: '64.063rem', // 1025px
  xl: '90.063rem', // 1441px
};

export const mediaQuery = (width, styles) => css`
  @media only screen and (min-width: ${width}) {
    ${styles}
  }
`;
