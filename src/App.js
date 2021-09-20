import React from 'react';

import GlobalStyle from './GlobalStyle';
import Header from 'components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <main>
        <Header />
        <Home />
      </main>
    </>
  );
};

export default App;
