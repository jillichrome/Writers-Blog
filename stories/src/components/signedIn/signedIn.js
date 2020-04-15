import React from 'react';
import './signedIn.css';
import Header from './header.js';
import Posts from './entries.js';
import Sidebar from '../home/sidebar.js';

const data = require('../data.json');

class SignedIn extends React.Component {
  render() {
    const stories = data.stories.story;
    return (
      <div>
        <header>
          <Header />
        </header>
        <section>
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
