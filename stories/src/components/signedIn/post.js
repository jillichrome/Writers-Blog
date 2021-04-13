import React from 'react';
import Header from './header/header.js';
import auth from '../auth-helper.js';
import {getRequest} from '../../requests.js';
import './post.css';

class Story extends React.Component {
  state = {
    title: '',
    story: ''
  }
  componentDidMount() {
    const user = auth.getUser();
    getRequest('GET', `/${user.id}/story/${user.post.title}`).then(response => {
      response.json().then(data => {
        this.setState({title: data.title, story: data.story})
      });
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
/*

    const outputHtml = () => {
      const info = story(stories);
      const name = this.props.match.params.storyTitle;
      if(name !== info["title"]) return null;
      return(
        <div>
          <div className='storytitle'>{info["title"]}</div>
          <div className='body'>{info["storyBody"]}</div>
        </div>
      )
    }
*/
    return(
      <div>
        <header>
          <Header />
        </header>
        <section>
          <h1>{this.state.title}</h1>
          <p>{this.state.story}</p>
        </section>
      </div>
    )
  }
}

export default Storyt;
