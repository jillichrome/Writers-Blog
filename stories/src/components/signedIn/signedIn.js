import React from 'react';
import './signedIn.css';
import Header from './header.js';
import Post from './entries.js';
import Sidebar from '../home/sidebar.js';
import auth from '../auth-helper.js';

class SignedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: auth.getUser()};
  }

  render() {
    const { user } = this.state;
    return user.id
        ? (
          <div>
            <header>
              <Header />
            </header>
            <section>
              <h2 className='welcome'>Hi {user.firstName}!</h2>
              <Post />
              <aside>
                <Sidebar />
              </aside>
            </section>
          </div>
        )
      : (<div>Loading...</div>);
  }
}

export default SignedIn;
