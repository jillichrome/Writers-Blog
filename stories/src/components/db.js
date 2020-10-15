const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 8080;
const url = 'mongodb://localhost/blog';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => console.log(error));

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

const router = require('./api_routes');

app.post('/signup', router.createUser);
app.post('/signin', router.signinUser);
app.get('/home/:id', router.findUser);
app.get('/home/:id', router.readStory);
app.post('/home/:id/create', router.submitStory);
app.get('/story/:title', router.readStory);

app.listen(PORT, function() {
  console.log('Server is running at PORT:', PORT);
});
