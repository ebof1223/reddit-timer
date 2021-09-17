import React from 'react';
import { Container, Logo, NavLink } from './Header.style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container as="header">
      <Link to="/">
        <Logo />
      </Link>

      <nav>
        <NavLink to="/how-it-works">How it works</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </Container>
  );
};

export default Header;
