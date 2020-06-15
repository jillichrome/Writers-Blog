import React from 'react';
import './signedOut.css';
import Header from '../header/header.js';
import Posts from '../home/entries';
import Sidebar from '../home/sidebar.js';

const data = require('../data.json');

class SignedOut extends React.Component {
  render() {
    const stories = data.stories.story;
    return (
      <div>
        <header>
          <Header />
        </header>
        <section>
          <p className='signedout'>You have been logged out!</p>
          <Posts stories={stories} />
          <aside>
            <Sidebar />
          </aside>
        </section>
      </div>
    );
  }
}

export default SignedOut;
