import React from 'react';
import { NavLink} from 'react-router-dom';
import './signedIn.css';
import Header from './header.js';
import auth from '../auth-helper.js';
import { makeRequest } from '../../requests.js';

class SignedIn extends React.Component {
  constructor(props) {
    super(props);
    this.user = auth.getUser();
  }

  render() {

    return this.user.id
        ? (
          <div>
            <header>
              <Header />
            </header>
            <main>
              <h2 className='welcome'>Hi {this.user.firstName}!</h2>
              <div className="flex-container">
                { this.user.post.map(post =>
                  <div data-key={post["_id"]} id="entry" className='card'>
                    <div className='container'>
                      <p className='heading'>{post["title"]}</p>
                      <p>{post["date"]}</p>
                    </div>
                    <NavLink to={`/story/${post["title"]}`}><button>READ MORE!</button></NavLink>
                    <button className='change'>Edit</button>
                    <button className='delete'>Remove</button>
                  </div>
                )
              }
              </div>
            </main>
          </div>
        )
      : (<div>Loading...</div>);
  }
}

export default SignedIn;
