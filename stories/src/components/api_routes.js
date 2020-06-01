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

exports.loginUser = async(req, res) => {
  try{
    const user = await User.findOne({email: req.body.email});
    if(!User.findByCredentials(req.body.email, req.body.password)) {
      return res.status(401).send({msg: 'Invalid credentials!'});
    }
    const token = jwt.sign({_id:user._id}, JWT_KEY);
    res.cookie('t', token, {expire: new Date() + 9999});
    return res.json({
      token,
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

exports.logoutUser = (req, res) => {
  res.clearCookie('t');
  return res.status(200).send({msg: 'Successfully logged out!'});
}

exports.findUserById = async(req, res, next, id) => {
  try {
    if(mongoose.Types.ObjectId.isValid(id)) {
      console.log(mongoose.Types.ObjectId(id));
      console.log(req.params._id);
      await User.findById(req.params._id, function(err, user) {
        if(err) {
          next(err);
        }
        req.profile = user;
        console.log(req.profile);
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


/*
const saltrounds = 10;

exports.createUser = async function(req, res, next) {
  const user = await User.findOne({email: req.body.email});
  if(user) {
    return res.status(400).json({email: "Email already exists"});
    next();
  };
  const hashPassword = await Bcrypt.hash(req.body.password, saltrounds);
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashPassword
  });

  try {
    const savedUser = await newUser.save();
    if(savedUser) {
      return res.redirect('/home');
    };
  } catch(err) {
    return next(err);
  }
}
*/
