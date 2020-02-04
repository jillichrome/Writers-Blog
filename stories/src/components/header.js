import React from 'react';
import './header.css';
import './blog-header-background.jpg';

export default class Header extends React.Component {
  render() {
    return(
      <header>
        <img src={require('./blog-header-background.jpg')} alt='' />
        <h1>LITERARY LARRY</h1>
      </header>
    )
  }
}
