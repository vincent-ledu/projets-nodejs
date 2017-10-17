var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is the home page!');
})

  .get('/basement', function(req, res) {
    res.setHeader('Content-type', 'text/plain');
    res.end('You are in basement!')
  })

  .get('/floor/1/room', function(req, res) {
    res.setHeader('Content-type', 'text/plain');
    res.end('You are at floor 1, in a room');
  })
  .get('/floor/:floornumber/room', function(req, res) {
    res.setHeader('Content-type', 'text/plain');
    if (isNaN(req.params.floornumber))
      res.status(200).send('Are you trying an XSS??? Really?');
    else 
      res.status(200).send('You are at floor ' + req.params.floornumber);
  })
  .use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page not found!');
  });

app.listen(8080, 'localhost');