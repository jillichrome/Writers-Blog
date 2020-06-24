const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  story: String,
  date:{type: Date, default: Date.now}
});

/*
postSchema.statics.findByCredentials = async (email, password) => {
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
*/
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
