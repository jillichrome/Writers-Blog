import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <article></article>
        <aside>
          <Sidebar />
        </aside>
      </section>
    </div>
  );
}

export default App;
