const mongoose = require('mongoose');
const Bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

userSchema.pre('save', async function(next) {
  let user = this;
  Bcrypt.hash(user.password, 10, function(err, hash) {
    if(err) {
      return next(err);
    } else {
      user.password = hash;
      next();
    }
  });
})

const User = mongoose.model('user', userSchema);

module.exports = User;
