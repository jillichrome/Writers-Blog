import { signoutUser } from './api-user.js';
import { makeRequest } from '../requests.js';

let user;

const auth = {
  setUser(newUser) {
    user = newUser;
  },

  getUser() {
    // [TODO] Check cookies for user ID
    return user;
  },

  isAuthenticated() {
    return user.token ? true : false;
  },

  signOut() {
    user = null;
  }
};

export default auth;
