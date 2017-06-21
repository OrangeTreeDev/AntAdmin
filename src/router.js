import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import LoginPage from './routes/login/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/login" />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
}

export default RouterConfig;
