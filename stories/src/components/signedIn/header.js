import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import auth from '../auth-helper.js';
import './header.css';
import './blog-header-background.jpg';

export default class Header extends React.Component {
  render() {
    const user = auth.getUser();
    return(
      <header>
        <NavLink to={`/home/${user.id}/create`}><h5 className='up'>Create Story</h5></NavLink>
        <NavLink to='/signout' onClick={() => auth.signoutUser()}><h5 className='in'>Sign Out</h5></NavLink>
        <img src={require('./blog-header-background.jpg')} alt='' />
        <Link to='/'><h1>LITERARY LARRY</h1></Link>
      </header>
    )
  }
}
