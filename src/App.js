import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './GlobalStyle';
import Header from './components/Header';

const App = () => (
  <>
    <Normalize />
    <GlobalStyle />
    <Header />

    <Switch>
      <Route path="/how-it-works">
        <h1>How it works</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
      <Route path="/">
        <h1>Home</h1>
      </Route>
    </Switch>
  </>
);

export default App;
