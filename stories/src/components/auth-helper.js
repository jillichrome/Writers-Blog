import { signoutUser } from './api-user.js';

const auth = {
  isauthenticated() {
    if(sessionStorage.getItem('jwt')) {
      return JSON.parse(sessionStorage.getItem('jwt'));
    } else {
      return false;
    }
  },

  authenticated(jwt, cb) {
    if(typeof window !== 'undefined') {
      sessionStorage.setItem('jwt', JSON.stringify(jwt));
    }
    cb();
  },

  signoutUser(cb) {
    if(typeof window !== 'undefined') {
      sessionStorage.removeItem('jwt');
    }
    cb();
    signoutUser.then(data => {
      document.cookie = 't=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    })
  }
};

export default auth;
