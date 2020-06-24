import React from 'react';
import Header from './header.js';
//import auth from '../auth-helper.js';

class Create extends React.Component {
  state = {
    title: '',
    story: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      },
      credentials: 'include',
      body: JSON.stringify({
        title: this.state.title,
        story: this.state.story
      })
    }

    fetch('/create', options).then(response => {
      response.json().then(data => {
        console.log(data);
      });
    }).catch(err => {
      console.log(err);
    })
  };

  render() {
    return(
      <div>
        <header>
          <Header />
        </header>
        <form onSubmit={this.handleSubmit}>
          <h3>Write Story Post</h3>
          <div>
            <label htmlFor='title'>Story Title</label>
            <input type='text' id='title' onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor='story'>Start Story Here:</label>
            <br></br>
            <input type='text' id='story' onChange={this.handleChange}></input>
          </div>
          <div>
            <button>Submit Story</button>
          </div>
        </form>
        <p>{this.state.title}</p>
      </div>
    )
  }
}

export default Create;
