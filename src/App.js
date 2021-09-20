import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import Header from 'components/Header';
import Home from './pages/Home';
import Container from 'components/Container';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Normalize />

      <Container>
        <Header />
        <Home />
      </Container>
    </>
  );
};

export default App;
