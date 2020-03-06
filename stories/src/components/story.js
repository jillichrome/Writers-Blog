import React from 'react';
import Header from './header';
import './story.css';

const data = require('./data.json');

class Story extends React.Component {
  render() {
    const stories = data.stories.story;

    const story = (stories) => {
      let storyInfo;
      let current;
      const name = this.props.match.params.storyTitle;
      for(let i=0; i < stories.length; i++) {
        storyInfo = stories[i];
        if(name === storyInfo["title"]) {
          current = stories[i];
        }
      }
      return current
    }

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

    return(
      <div>
        <header>
          <Header />
        </header>
        <section>
          {outputHtml()}
        </section>
      </div>
    )
  }
}

export default Story;
