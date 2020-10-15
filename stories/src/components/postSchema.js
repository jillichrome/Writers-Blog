const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  story: String,
  date:{type: Date, default: Date.now},
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
