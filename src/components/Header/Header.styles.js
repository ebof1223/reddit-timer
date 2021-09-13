import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
`;

export const Logo = styled.div`
  color: #636363;
  margin-left: 50px;
  text-decoration: none;
`;

export const Menu = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin-right: 54px;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  margin-left: 25.5px;
  color: #636363;
  text-decoration: none;
`;
