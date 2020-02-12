import React from 'react';
import './App.css';
import Header from './components/header';
import Posts from './components/entries';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <article>
          <Posts />
        </article>
        <aside>
          <Sidebar />
        </aside>
      </section>
    </div>
  );
}

export default App;
