import styled, { css } from 'styled-components';
import { breakpoint, mediaQuery } from 'styles/media_query';

import { ReactComponent } from './logo.svg';

export const Container = styled.header`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-box-pack: justify;

  ${mediaQuery(
    breakpoint.md,
    css`
      justify-content: space-between;
    `
  )}
`;

export const Logo = styled(ReactComponent)`
  margin-top: 8px;
`;
