import React from 'react';
import {createBrowserHistory} from 'history';
import {Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './privateRoute.js';

import Home from './components/home/home.js';
import Story from './components/signedIn/post.js';
import SignUp from './components/auth/signup.js';
import SignIn from './components/auth/signin.js';
import SignedIn from './components/signedIn/signedIn.js';
import Create from './components/signedIn/create.js';
import SignedOut from './components/signedIn/signedOut.js';

class App extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/story/:storyTitle' component={Story} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <PrivateRoute exact path='/home/:id' component={SignedIn} />
          <Route path='/home/:id/create' component={Create} />
          <Route path='/signout' component={SignedOut} />
        </Switch>
      </Router>
    );
  }
}

export default App;
