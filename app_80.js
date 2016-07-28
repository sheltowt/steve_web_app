var express = require('express');
var app = express();
var data = require('./sample.json');
var data2 = require('./world.json');

app.get('/data', function(req, res) {
  res.send(data);
});

app.get('/world', function(req, res) {
  res.send(data2);
});

app.get('/', function(req, res) {
  exist = {"exist": true}
  res.send(exist);
});


app.listen(80);