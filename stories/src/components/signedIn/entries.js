import React from 'react';
import {NavLink} from 'react-router-dom';
import './entries.css';

const Post = ({story}) => {
  return(
    <div className='card'>
      <img src={story.image} alt='' />
      <div className='container'>
        <p className='heading'>{story.title}</p>
        <p>{story.date}</p>
        <p>{story.summary}</p>
      </div>
      <NavLink to={`/story/${story.title}`}><button>READ MORE!</button></NavLink>
      <button className='change'>Edit</button>
      <button className='delete'>Remove</button>
    </div>
  )
}

const Posts = ({stories}) => {
  return(
    <div className='article'>
      { stories.map(story => {
        return(
          <article key={story.id}>
            <Post story={story} />
          </article>
        )
      })}
    </div>
  )
}

export default Posts;
