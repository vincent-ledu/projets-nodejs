var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is the home page!');
});

app.get('/basement', function(req, res) {
  res.setHeader('Content-type', 'text/plain');
  res.end('You are in basement!')
});

app.get('/floor/1/room', function(req, res) {
  res.setHeader('Content-type', 'text/plain');
  res.end('You are at floor 1, in a room');
})


app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.send(404, 'Page not found!');
});

app.listen(8080, 'localhost');