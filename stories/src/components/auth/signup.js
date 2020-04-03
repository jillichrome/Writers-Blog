import React from 'react';
import Header from '../header/header.js';
import './auth.css';

class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }

    const url = '/signup';
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    }

    if(this.state.firstName !== '' && this.state.lastName !== ''
      && this.state.email !== '' && this.state.password !== '') {
        fetch(url, options).then(function(response) {
          console.log(response);
        });
      }
    }

  render() {
    return(
      <div>
        <header>
          <Header />
        </header>
        <form onSubmit={this.handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange}></input>
          </div>
          <div>
            <button type="Submit">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;

/*
.then(function(obj) {
  window.alert('User created!');
  console.log(obj);
  console.log('Please work');
}).catch(error => console.log(error))
}

window.alert('User created!');
console.log(res.data);
this.setState({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
  */
