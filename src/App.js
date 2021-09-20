import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Header from 'components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <main>
        <Header />
        <Switch>
          <Route path="/how-it-works">
            <h1>How it works</h1>
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
