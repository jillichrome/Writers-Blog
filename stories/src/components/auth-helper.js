import { signoutUser } from './api-user.js';
import Cookies from 'js-cookie';

const auth = {
  isauthenticated() {
    if(Cookies.get('t')) {
      return Cookies.get('t');
    } else {
      return false;
    }
  },
/*
  authenticated(jwt, cb) {
    if(typeof window !== 'undefined') {
      Cookies.set('token', JSON.stringify(token));
    }
    cb();
  },
*/
  signoutUser() {
    if(typeof window !== 'undefined') {
      Cookies.remove('t');
    }
    signoutUser(data => {
      document.cookie = '';
    })
  }
};

export default auth;
