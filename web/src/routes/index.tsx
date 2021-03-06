import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import CreateProperties from '../pages/CreateProperties';
import SearchProperties from '../pages/SearchProperties';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/create" component={CreateProperties} isPrivate />
      <Route path="/search" component={SearchProperties} isPrivate />
    </Switch>
  );
};

export default Routes;
