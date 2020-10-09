import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import auth from './components/auth-helper.js';

const PrivateRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} render={props => (
        auth.isAuthenticated() ? <Component {...props} /> : <Redirect to='/signin' />
    )} />
  )
}

export default PrivateRoute;
