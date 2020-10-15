import React from 'react';
import Header from '../header/header.js';
import { makeRequest } from '../../requests.js';
import auth from '../auth-helper.js';
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

    if(this.state.email !== '' && this.state.password !== ''){
      makeRequest('POST', '/signin', {
        email: this.state.email,
        password: this.state.password
      }).then(response => {
        response.json().then(data => {
          auth.setUser(data.user);
          this.props.history.push(`/home/${data.user.id}`);
        })
      }).catch(err => {
        console.log(err);
      })
    }
    else{
      // [TODO] Do form validation here, e.g. "please input a valid email
      //        address"
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
