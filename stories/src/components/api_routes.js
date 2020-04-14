const User = require('./schema.js');
const Bcrypt = require('bcrypt');

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
      return res.redirect('/');
    };
  } catch(err) {
    return next(err);
  }
}

exports.getUser = async function(req, res, next) {
  try {
    const user = await User.findOne({email: req.body.email}, function(err, result) {
      if(err) {
        return res.send(err);
      };
      return result;
    });
    Bcrypt.compare(req.body.password, user.password, function(err, result) {
      if(result === true) {
        return res.redirect('/');
      } else {
        return res.send('Invalid password');
      }
    });
  } catch(error) {
    next(error);
  }
}
