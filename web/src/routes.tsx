import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SignIn';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignIn} />
    </BrowserRouter>
  );
};

export default Routes;
