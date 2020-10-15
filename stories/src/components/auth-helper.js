import { signoutUser } from './api-user.js';

let user;
/*
function parseJwt(token) {
  if(!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}
*/
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
