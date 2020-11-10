import React from 'react';
import {NavLink} from 'react-router-dom';
import auth from '../auth-helper.js';
import {getRequest} from '../../requests.js';
import './entries.css';


class Post extends React.Component {
  state = {
    post: ''
  }

  componentDidMount = () => {
    getRequest('GET', `/home/${auth.getUser()}`).then(response => {
      response.json().then(data => {
        this.setState({
          post: data
        })
      })
    }).catch(error => console.log(error));
  }

  render() {
    return(
      <div id="entry" className='card'>
        <div className='container'>
          <p className='heading'>{this.state.post.title}</p>
          <p>{this.state.post.date}</p>
        </div>
        <NavLink to={`/story/${this.state.post.title}`}><button>READ MORE!</button></NavLink>
        <button className='change'>Edit</button>
        <button className='delete'>Remove</button>
      </div>
    )
  }
}

export default Post;
