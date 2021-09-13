import React from 'react';
import { Link } from 'react-router-dom';

import logoPrimary from '../../resources/logoPrimary';
// eslint-disable-next-line object-curly-newline
import { Container, Logo, Menu, NavLink } from './Header.styles';

const Header = () => (
  <Container>
    <Link to="/">
      <Logo>{logoPrimary}</Logo>
    </Link>

    <Menu>
      <NavLink to="/search/javascript">Search</NavLink>
      <NavLink to="/how-it-works">How it works</NavLink>
      <NavLink to="/about">About</NavLink>
    </Menu>
  </Container>
);

export default Header;
