const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 8080;
const url = 'mongodb://localhost/blog';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => console.log(error));

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(PORT, function() {
  console.log('Server is running at PORT:', PORT);
});
