import React from 'react';
import Header from './header.js';
import auth from '../auth-helper.js';
import { makeRequest } from '../../requests.js';

class Create extends React.Component {
  state = {
    title: "",
    story: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.id] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.title !== '' && this.state.story !== '') {
      const user = auth.getUser();
      makeRequest('POST', `/home/${user.id}/create`, {
        title: this.state.title,
        story: this.state.story
      }).then(response => {
        response.json().then(data => {
          alert("Story saved!");
          auth.updateUser(data);
          this.props.history.push(`/home/${data._id}`);
        });
      }).catch(err => {
        console.log(err);
      })
    }
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
      </div>
    )
  }

}

export default Create;
