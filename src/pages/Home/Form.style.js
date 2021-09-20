import styled, { css } from 'styled-components';
import { breakpoint, mediaQuery } from 'styles/media_query';

export const FormContainer = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const Input = styled.input`
  border: 1px solid #d5d5d5;
  color: #000000;
  font-size: 14px;
  height: 36px;
  margin: 50px;
  padding: 0 15px;
  width: 370px;

  :focus,
  :active {
    border: 1px solid #d5d5d5;
  }
`;

export const Label = styled.div`
  span {
    display: none;
    ${mediaQuery(
      breakpoint.md,
      css`
        display: inline-block;
        font-size: 1rem;
      `
    )}
  }
`;
