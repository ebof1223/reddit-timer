import styled from 'styled-components';

export const Day = styled.div`
  align-items: center;
  background: #1e2537;
  color: #ffffff;
  display: flex;
  padding: 14.5px 48.5px;
`;
export const Element = styled.div`
  background: ${({ postCount }) => {
    if (postCount > 15) return '#3984A3';
    if (postCount > 12) return '#5AAD8C';
    if (postCount > 9) return '#5EB391';
    if (postCount > 6) return '#8CC894';
    if (postCount > 3) return '#A9D194';
    return '#E0E5A3';
  }};
  align-items: center;
  color: #ffffff;
  display: flex;
  grid-row: 1/2;
  justify-content: center;
  padding: 0 25px;
`;

export const Hero = styled.div`
  background: linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%);
  cursor: default;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
`;

export const Hour = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
`;

export const Section = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export const Time = styled.div`
  color: #787878;
  font-weight: 600;
  font-size: 14px;
  padding: 1rem;
  text-align: center;
`;
