import React from 'react';
import './home.css';
import Header from './header';
import Posts from './entries';
import Sidebar from './sidebar';

const data = require('./data.json');

class Home extends React.Component {
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

export default Home;
