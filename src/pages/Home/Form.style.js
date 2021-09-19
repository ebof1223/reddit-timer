import styled from 'styled-components';

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

export const Label = styled.label`
  font-size: 18px;
`;
