import Header from './components/Header';
import Home from './pages/Home';
import GlobalStyle from './GlobalStyle';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <main>
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
