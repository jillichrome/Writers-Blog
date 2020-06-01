import React from 'react';
import './signedIn.css';
import Header from './header.js';
import Posts from './entries.js';
import Sidebar from '../home/sidebar.js';
import auth from '../auth-helper.js';
import {findUser} from '../api-user.js';

const data = require('../data.json');

class SignedIn extends React.Component {
  constructor({match}) {
    super();
    this.state = {
      user: ''
    }
    this.match = match;
  }

  componentDidMount = () => {
    const id = this.props.match.params._id;
    const jwt = auth.isauthenticated();

    findUser(
      {
        _id: id
      },
      {t : jwt.token}).then(data => {
        if(data.error) {
          this.props.history.push('/signin');
        } else {
          this.setState({user: data});
        }
    });
  }

  render() {
    const stories = data.stories.story;
    return (
      <div>
        <header>
          <Header />
        </header>
        <section>
          <h2 className='welcome'>Hi {this.state.user.firstName}!</h2>
          <Posts stories={stories} />
          <aside>
            <Sidebar />
          </aside>
        </section>
      </div>
    );
  }
}

export default SignedIn;
