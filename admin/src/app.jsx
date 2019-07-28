import React from 'react';
import {
  HashRouter as Router, Route, Switch,
} from 'react-router-dom';

import Login from './components/login';
import MainPage from './components/mainpage';

import '../public/css/style.css';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/*" component={MainPage} />
    </Switch>
  </Router>
);
