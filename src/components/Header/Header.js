import { Link } from 'react-router-dom';
import React from 'react';

import { Container, Logo, NavLink } from './Header.style';

const Header = () => {
  return (
    <Container as="header">
      <Logo />
    </Container>
  );
};

export default Header;
