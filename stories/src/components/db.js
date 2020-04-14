const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const url = 'mongodb://localhost/blog';
const PORT = process.env.PORT || 8080;

const app = express();
const userCtr = require('./api_routes');

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => console.log(error))

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
})

app.post('/signup', userCtr.createUser);
app.post('/signin', userCtr.getUser);

app.listen(PORT, function() {
  console.log('Server is running at PORT:', PORT);
});
