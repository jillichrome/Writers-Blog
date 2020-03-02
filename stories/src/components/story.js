import React from 'react';
import Header from './header';
import './story.css';

const data = require('./data.json');

const StoryContent = () => {
  const story = data.stories.story;
  return(
    <div>
      <div className='title'>{story[0].title}</div>
      <div className='body'>{story[0].storyBody}</div>
    </div>
  )
}

class Story extends React.Component {
  render() {
    const story = data.stories.story;
    console.log(story);
    return(
      <div>
        <header>
          <Header />
        </header>
        <section>
          <StoryContent story={story} />
        </section>
      </div>
    )
  }
}

export default Story;
