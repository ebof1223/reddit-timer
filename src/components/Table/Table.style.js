import styled, { css } from 'styled-components';

import { breakpoint, mediaQuery } from 'styles/media_query';

const getBackgroundColorOfHour = (hourCount) =>
  ({
    0: '#E0E592',
    1: '#AED396',
    2: '#A9D194',
    3: '#A0CE93',
    4: '#99CD94',
    5: '#8CC894',
    6: '#5EB391',
    7: '#5DB492',
    8: '#5CB391',
    9: '#5AAD8C',
  }[hourCount] || '#3984A3');

export const Day = styled.div`
  align-items: center;
  background: #1e2537;
  color: #ffffff;
  display: flex;
  font-weight: 600;
  padding: 0.5rem 1rem;
`;
export const Element = styled.div`
  align-items: center;
  background: ${({ postCount }) => getBackgroundColorOfHour(postCount)};

  background: ${({ isSelectedCell }) => isSelectedCell && 'rgb(20, 25, 38)'};
  color: #ffffff;
  cursor: pointer;
  display: flex;
  grid-row: 1/2;
  justify-content: center;
  transition: background 0.2s ease-in-out 0s;

  :hover {
    background: rgb(20, 25, 38);
  }
`;

export const Hero = styled.article`
  background: linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%);
  cursor: default;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  margin-bottom: -50px;
  margin-top: -100px;
  transform: scale(0.6);
  transform-origin: center;

  ${mediaQuery(
    breakpoint.md,
    css`
      margin: 0 auto;
      transform: scale(1);
    `
  )}
`;

export const Hour = styled.div`
  display: grid;
`;

export const Time = styled.div`
  background: linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%);
  color: #787878;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  padding: 3px;
`;

export const Meridian = styled.span`
  display: none;
  ${mediaQuery(
    breakpoint.lg,
    css`
      display: inline-block;
    `
  )}
`;

export const Suffix = styled.span`
  display: none;
  ${mediaQuery(
    breakpoint.lg,
    css`
      display: inline-block;
    `
  )}
`;
