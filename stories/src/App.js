import React from 'react';
import {createBrowserHistory} from 'history';
import {Router, Switch, Route} from 'react-router-dom';

import Home from './components/home/home.js';
import Story from './components/story.js';
import SignUp from './components/auth/signup.js';
import SignIn from './components/auth/signin.js';

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
        </Switch>
      </Router>
    );
  }
}

export default App;
