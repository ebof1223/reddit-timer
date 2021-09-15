import React from 'react';
import { Container } from './Hour.style';

const Hour = ({ ...props }) => {
  return <Container>{props.children}</Container>;
};

export default Hour;
