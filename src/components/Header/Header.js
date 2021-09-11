import React from 'react';
import styled from 'styled-components';

import Logo from '../../resources/logo';

const HeaderStyle = styled.header`
  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
      margin-right: 80px;

      li {
        font-size: 1rem;
        font-weight: 400;
        line-height: 19.5px;
        margin: 0 25px;
        padding: 0.35px;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <nav>
        <div>{Logo}</div>
        <ul>
          <li>Search</li>
          <li>How it works</li>
          <li>About</li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

export default Header;
