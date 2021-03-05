import React from 'react';
import {NavLink} from 'react-router-dom';
import auth from '../auth-helper.js';
import {getRequest} from '../../requests.js';
import './entries.css';


class Post extends React.Component {
  render() {
    return auth.getUser().post.map(info => (
      console.log(info),
      <div id="entry" className='card'>
        <div>
          <div class='container'>
            <p className='heading'>{info["title"]}</p>
            <p>{info["date"]}</p>
          </div>
          <NavLink to={`/story/${info["title"]}`}><button>READ MORE!</button></NavLink>
          <button className='change'>Edit</button>
          <button className='delete'>Remove</button>
        </div>
      </div>
    ));
  }
}

export default Post;
