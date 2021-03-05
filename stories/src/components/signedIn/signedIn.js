import React from 'react';
import {NavLink} from 'react-router-dom';
import './signedIn.css';
import '../home/home.css';
import Header from './header.js';
import Post from './entries.js';
import Sidebar from '../home/sidebar.js';
import auth from '../auth-helper.js';

class SignedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth.getUser()
    };
  }

  render() {
    const { user } = this.state;
    return user.id
        ? (
          <div>
            <header>
              <Header />
            </header>
            <main>
              <h2 className='welcome'>Hi {user.firstName}!</h2>
              <div className="half-width">
                <Post key={user.id} />
              </div>
              <div className="half-width"></div>
            </main>
          </div>
        )
      : (<div>Loading...</div>);
  }
}

export default SignedIn;
