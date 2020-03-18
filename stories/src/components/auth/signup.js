import React from 'react';

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
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign Up</h5>
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
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
