import React from 'react';
import Header from './header.js';
import auth from '../auth-helper.js';
import './signedIn.css';

class Story extends React.Component {

  render() {
    const user = auth.getUser();
    const content = user.post.find( title => title["title"] === this.props.match.params.storyTitle);
    const output = () => {
      return(
        <div>
          <h2 className="storytitle">{content["title"]}</h2>
          <p className="storybody">{content["story"]}</p>
        </div>
      )
    }

    return(
      <div>
        <header>
          <Header />
        </header>
        <section>
          {
            output()
          }
        </section>
      </div>
    )
  }
}

export default Story;
