import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
