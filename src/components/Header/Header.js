import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line object-curly-newline
import { Container, Logo, Menu, NavLink } from './Header.styles';
import LogoSVG from './logo';

const Header = () => (
  <Container>
    <Link to="/">
      <Logo>{LogoSVG}</Logo>
    </Link>

    <Menu>
      <NavLink to="/search/javascript">Search</NavLink>
      <NavLink to="/how-it-works">How it works</NavLink>
      <NavLink to="/about">About</NavLink>
    </Menu>
  </Container>
);

export default Header;
