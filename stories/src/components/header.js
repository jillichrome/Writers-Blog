import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import './blog-header-background.jpg';

export default class Header extends React.Component {
  render() {
    return(
      <header>
        <img src={require('./blog-header-background.jpg')} alt='' />
        <Link to='/'><h1>LITERARY LARRY</h1></Link>
      </header>
    )
  }
}
