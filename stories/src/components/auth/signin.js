import React from 'react';
import Header from '../header/header.js';
import './auth.css';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    token: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    const url = '/signin';
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
        email: this.state.email,
        password: this.state.password,
        Authorization: this.state.token
      })
    }

    if(this.state.email !== '' && this.state.password !== ''){
      fetch(url, options).then(response => {
        response.json().then(data => {
          this.props.history.push(`/home/${data.user._id}`);
        });
      }).catch(err => {
        console.log(err);
      })
    }
  }

  render() {
    return(
      <div>
        <header>
          <Header />
        </header>
        <form onSubmit={this.handleSubmit}>
          <h3>Sign In</h3>
          <div>
            <label htmlFor="username">Email</label>
            <input type="email" id='email' onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange}></input>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
