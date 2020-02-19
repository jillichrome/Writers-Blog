import React from 'react';
import './entries.css';
import './arizona.jpg';

const Post = ({story}) => {
  return(
    <div className='card'>
      <img src={story.image} alt='' />
      <div className='container'>
        <p className='heading'>{story.title}</p>
        <p>{story.date}</p>
        <p>{story.summary}</p>
      </div>
      <button>READ MORE!</button>
    </div>
  )
}

const Posts = ({stories}) => {
  return(
    <div className='article'>
      { stories.map(story => {
        return(
          <article>
            <Post story={story} key={story.id} />
          </article>
        )
      })}
    </div>
  )
}

export default Posts;
