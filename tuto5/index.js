var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();

app.use(morgan('combined')) // Active le middleware de logging
  .use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
  .use(favicon(__dirname + '/public/favicon.ico')); // Active la favicon indiquée

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is the home page!');
})

  .get('/basement', function(req, res) {
    res.setHeader('Content-type', 'text/plain');
    res.end('You are in basement!');
  })

  .get('/floor/1/room', function(req, res) {
    res.setHeader('Content-type', 'text/plain');
    res.end('You are at floor 1, in a room');
  })
  .get('/floor/:floornumber/room', function(req, res) {
    //res.setHeader('Content-type', 'text/html');
    if (isNaN(req.params.floornumber))
      res.status(200).send('Are you trying an XSS??? Really?');
    else {
      res.render('room.ejs', {floor: req.params.floornumber});
      //res.status(200).send('You are at floor ' + req.params.floornumber);
    }
  })
  .use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page not found!');
  });

app.listen(8080, 'localhost');