let user;
let updatedUser;

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

  updateUser(currentUser) {
    updatedUser = Object.assign({...user, ...currentUser});
    user = updatedUser;
    return user;
  },

  signOut() {
    user = null;
  }
};

export default auth;
