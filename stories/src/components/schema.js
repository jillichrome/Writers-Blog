const mongoose = require('mongoose');
const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;
const saltrounds = 10;
const JWT_KEY = 'COVID2020';

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

userSchema.pre('save', function(next) {
  let user = this;
  Bcrypt.hash(user.password, 10, function(err, hash) {
    if(err) {
      return next(err);
    } else {
      user.password = hash;
      next();
    }
  });
});

userSchema.methods.generateHash = function(password) {
  return Bcrypt.hash(password, saltrounds);
}

userSchema.statics.findByCredentials = async (email, password) => {
  try{
    const user = await User.findOne({email});
    if(!user) {
      throw new Error({ msg: 'Invalid login'});
    }
    const isPasswordMatch = Bcrypt.compare(password, user.password);
    if(!isPasswordMatch) {
      throw new Error({ msg: 'Invalid Password'});
    }
    return user;
  } catch(error) {
    console.log(error);
  }
}

const User = mongoose.model('User', userSchema);

module.exports = User;
