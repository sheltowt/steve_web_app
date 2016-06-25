var express = require('express');
var app = express();

app.get('/', function(req, res) {
  steve = {}
  steve["exist"] = "yes"
  res.type('text/plain');
  res.send(steve);
});


app.listen(3000);