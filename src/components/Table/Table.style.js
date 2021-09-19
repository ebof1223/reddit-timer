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
  border: 1px solid black;
  cursor: pointer;
  color: #ffffff;
  grid-row: 1/2;
  padding: 0.9rem 1.5rem;
  width: 100%;
`;

export const Hero = styled.div`
  background: linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%);
  cursor: default;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: 8fr;
`;

export const Hour = styled.div`
  display: grid;
`;

export const Time = styled.div`
  padding: 1rem;
  color: #787878;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;
