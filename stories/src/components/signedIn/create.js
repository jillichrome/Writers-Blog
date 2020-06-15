import React from 'react';
import './create.css';
import './blog-header-background.jpg';

class Create extends React.Component {
  render() {
    return(
      <div>
        <img src={require('./blog-header-background.jpg')} alt='' />
        <section>
          <form>
            <h3>Write Story Post</h3>
            <div>
            <label htmlFor='newtitle'>Story Title</label>
            <input type='text' id='newtitle'></input>
            </div>
            <div>
            <label htmlFor='newstory'>Start Story Here:</label>
            <br></br>
            <br></br>
            <textarea id='newstory' rows='60' cols='90'></textarea>
            </div>
            <button>Submit Story</button>
          </form>
        </section>
      </div>
    )
  }
}

export default Create;
