import React from 'react';
import './home.css';
import Header from '../header/header.js';
import Posts from './entries';
import Sidebar from './sidebar';

const data = require('../data.json');

class Home extends React.Component {
  render() {
    const stories = data.stories.story;
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <div class="wrapper">
            <Posts stories={stories} />
            <Sidebar />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
