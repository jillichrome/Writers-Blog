const User = require('./schema.js');

exports.createUser = function(req, res) {
  const user = new User({created: Date.now});
  user.set('firstName', req.body.firstName);
  user.set('lastName', req.body.lastName);
  user.set('email', req.body.email);
  user.set('password', req.body.password);

  user.save((err) => {
    if(err) {
      res.send(err)
    } else {
      res.send("User saved");
    }
  })
}
