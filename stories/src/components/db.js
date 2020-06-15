const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const User = require('./schema.js');

const app = express();
const PORT = process.env.PORT || 8080;
const url = 'mongodb://localhost/blog';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => console.log(error));

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
/*
//session
app.use(session({
  secret: 'shhhhh',
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  resave: false,
  saveUninitialized: false
}));
*/
const router = require('./api_routes');

app.post('/signup', router.createUser);
app.post('/signin', router.signinUser);
app.get('/home/:_id', router.findUser);
app.param('_id', router.findUserById);
app.post('/signout', router.signoutUser);

app.listen(PORT, function() {
  console.log('Server is running at PORT:', PORT);
});
