const User = require('./schema.js');
const Post = require('./postSchema.js');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const JWT_KEY = 'COVID2020';

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if(err) {
      return res.status(400).send({msg: "Failed to create User"});
    }
    return res.status(200).send({msg: "New user registered"});
  })
}

exports.signinUser = async(req, res) => {
  try{
    const user = await User.findOne({email: req.body.email});
    if(!User.findByCredentials(req.body.email, req.body.password)) {
      return res.status(401).send({msg: 'Invalid credentials!'});
    }
    const token = jwt.sign({_id:user._id}, JWT_KEY);
    res.cookie('t', token, {expire: new Date() + 9999});
    return res.json({
      token: token,
      user: {_id:user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch(error) {
    console.log(error);
  }
}

exports.signoutUser = (req, res) => {
  res.clearCookie(JWT_KEY);
  return res.status(200).send({msg: 'Successfully logged out!'});
}

exports.findUserById = async(req, res, next, id) => {
  try {
    if(mongoose.Types.ObjectId.isValid(id)) {
      await User.findById(req.params._id, function(err, user) {
        if(err) {
          next(err);
        }
        req.profile = user;
        next();
      })
    }
  } catch(error) {
    console.log(error);
  }
}

exports.findUser = (req, res) => {
  return res.json(req.profile);
}

exports.submitStory = (req, res) => {
  const post = new Post(req.body);
  console.log(post);
  post.save((err, result) => {
    if(err) {
      return res.status(400).send({msg: "Failed to submit story"});
    }
    return res.status(200).send({msg: "New story saved!"})
  })
}
/*
exports.readStory = async(req, res) => {
  try{
    const post = await Post.findOne({title: req.body.title});
  }
}
*/
