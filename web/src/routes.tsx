import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  );
};

export default Routes;
