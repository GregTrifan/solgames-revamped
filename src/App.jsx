import React from 'react';
import "@fontsource/alata";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import HowItWorks from './HowItWorks';
import Team from './team';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/how-it-works">
            <HowItWorks />
          </Route>
          <Route path="/">
            <Team />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
