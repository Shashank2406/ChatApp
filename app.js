var express= require('express');
var mongoose= require('mongoose');
var bodyParser= require('body-parser');
// var Regex = require("regex");
mongoose.connect('mongodb://localhost:27017/test3');
var app = module.exports= express();


var NODE_ENV  = 'development';
app.set('env', process.env.NODE_ENV || 'production');
  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(bodyParser.json());
  routes= require('./routes/index');

  app.use('/', routes);
  var port= process.env.PORT || 4000;
  app.listen(port);
  console.log('insert getat on port' + port);
