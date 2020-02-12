import React from 'react';
import './entries.css';
import './arizona.jpg';

export default class Posts extends React.Component {
  render() {
    return(
      <div className='card'>
        <img src={require('./arizona.jpg')} alt='' />
        <div className='container'>
          <p className='heading'>Title Heading</p>
          <p>Date</p>
          <p>Summary of story.</p>
        </div>
        <button>READ MORE!</button>
      </div>
    )
  }
}
