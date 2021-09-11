import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Route
        render={({ location }) => {
          <Switch location={location}>
            <Route exact path="/" render={() => {}}>
              Home
            </Route>
            <Route exact path="/search" render={() => {}}>
              Search
            </Route>
          </Switch>;
        }}
      />
    </Router>
  </ThemeProvider>
);

export default App;
