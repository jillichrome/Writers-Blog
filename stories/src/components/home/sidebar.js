import React from 'react';
import './home.css';

export default class Sidebar extends React.Component {
  render() {
    return(
      <div id="sidebar" className='card'>
        <div className='container'>
          <p className='section'>About Me</p>
          <h2>Larry Fronk</h2>
          <p className='title'>Writer, City Planner, All Around Boss</p>
          <p className='genre'>Genre: Short Stories</p>
        </div>
      </div>
    )
  }
}
