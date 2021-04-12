import React from 'react';
import { NavLink} from 'react-router-dom';
import './signedIn.css';
import '../home/home.css';
import Header from './header.js';
//import Sidebar from '../home/sidebar.js';
import auth from '../auth-helper.js';

class SignedIn extends React.Component {
  render() {
    const user = auth.getUser();
    return user.id
        ? (
          <div>
            <header>
              <Header />
            </header>
            <main>
              <h2 className='welcome'>Hi {user.firstName}!</h2>
              <div className="flex-container">
                { user.post.map(post =>
                  <div key={post["_id"]} id="entry" className='card'>
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
