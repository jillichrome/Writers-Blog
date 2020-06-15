import React from 'react';
import './signedIn.css';
import Header from './header.js';
import Posts from './entries.js';
import Sidebar from '../home/sidebar.js';
import auth from '../auth-helper.js';

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

    fetch('/home/' + id, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + jwt
      }
    }).then(response => {
      response.json().then(response => {
        this.setState({user: response});
      })
    }).catch(error => console.log(error));
  }

  render() {
    const stories = data.stories.story;
    console.log(this.state.user);
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
