import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppStyle from './AppStyle';

const App = () => (
  <AppStyle>
    <Router>
      <Route
        render={({ location }) => {
          <Switch location={location}>
            <Route exact path="/" render={() => {}} />
            <Route exact path="/search" render={() => {}} />
          </Switch>;
        }}
      />
    </Router>
  </AppStyle>
);

export default App;
