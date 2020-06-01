const passport = require('passport');
const User = require('../schema.js');
const jwt = require('jsonwebtoken');
const JWT_KEY = 'COVID2020';

const auth = async(req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const data = jwt.verify(token, JWT_KEY);
  try {
    const user = await User.findOne({_id: data._id, token: token});
    if(!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch(error) {
    res.status(401).send({ msg: 'Not authorized!'});
  }
};

module.exports = auth;
