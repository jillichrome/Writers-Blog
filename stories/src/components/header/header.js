import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import './blog-header-background.jpg';

export default class Header extends React.Component {
  render() {
    return(
      <header>
        <Link to='/signup'><h5 className='up'>Sign Up</h5></Link>
        <Link to='/signin'><h5 className='in'>Sign In</h5></Link>
        <img src={require('./blog-header-background.jpg')} alt='' />
        <Link to='/'><h1>LITERARY LARRY</h1></Link>
      </header>
    )
  }
}
