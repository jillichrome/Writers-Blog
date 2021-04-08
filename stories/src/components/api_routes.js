const User = require('./schema.js');
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
    const user = await User.findByCredentials(req.body.email, req.body.password);
    if (!user) {
      return res.status(401).send({msg: 'Invalid credentials!'});
    }
    const userForToken = {
      username: user.fistName,
      id: user.id
    }
    const token = jwt.sign(userForToken, JWT_KEY);
    // [TODO] Need to set a cookie here also
    return res.json({
      user: {
        token: token,
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        post: user.post
      }
    });
  } catch(error) {
    console.log(error);
  }
}

exports.findUserById = async(req, res, next, id) => {
  try {
    if(mongoose.Types.ObjectId.isValid(id)) {
      await User.findById(req.params.id, function(err, user) {
        if(err) {
          next(err);
        }
        user.id = user._id;
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

const checkToken = (req, res, next) => {
  const header = req.headers['authorization'];
  if(typeof header !== 'undefined') {
    const bearer = header.split(' ');
    const token = bearer[1];
    req.token = token;
    next()
  } else {
    res.sendStatus(403);
  }
}

exports.authorization = (req, res) => {
  const token = req.token;
  const decodedToken = jwt.verify(token, JWT_KEY);
  if(!token || !decodedToken.id) {
    return res.status(401).json({error: 'token missing or invalid'})
  }
}

exports.submitStory = async(req, res) => {
  try {
    await User.findById(req.params.id, function(err, user) {
      if(err) {return err}

      const story = req.body;
      if(story) {
        user.post.push(story);
      }
      user.markModified('post');
      user.save((err, result) => {
        if(err) {
          return res.status(400).send({msg: "Failed to submit story"});
        }
        return res.json(result);
      })
    });
  } catch(error) {
    console.log(error);
  }
}

exports.readStory = async(req, res) => {
  try{
    await User.findOne(req.params.id, function(err, user) {
      if(err) {return err};
      const post = user.post;
      if(user.post.title === req.params.title) {
        return res.json({
          post: {
            title: user.post.title,
            date: user.post.date,
            story: user.post.story
          }
        })
      }
    });
  } catch(error) {
    console.log(error);
  }
}
