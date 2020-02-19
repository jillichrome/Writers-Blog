import React from 'react';
import './App.css';
import Header from './components/header';
import Posts from './components/entries';
import Sidebar from './components/sidebar';

const data = require('./components/data.json');

class App extends React.Component {
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

export default App;
