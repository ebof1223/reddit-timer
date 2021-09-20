import styled, { css } from 'styled-components';

import { breakpoint, mediaQuery } from 'styles/media_query';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 1.25rem; /* 20px */

  ${mediaQuery(
    breakpoint.xl,
    css`
      margin: 0 auto;
      max-width: 90rem; /* 1440px */
    `
  )}
`;
