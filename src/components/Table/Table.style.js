import styled from 'styled-components';

export const Hero = styled.div`
  background: linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%);
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: 8fr;
`;

export const Time = styled.div`
  padding: 1rem;
  color: #787878;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;
export const Day = styled.div`
  background: #1e2537;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 14.5px 48.5px;
`;
export const Element = styled.div`
  background: #a9d194;
  color: #ffffff;
  grid-row: 1/3;
  padding: 1rem 2rem;
  text-align: center;
`;

export const Group = styled.div`
  display: grid;
`;
