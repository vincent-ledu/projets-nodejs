var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();
app.use(session({secret: 'todotopsecret'}))

  .use(morgan('combined')) 
  .use(express.static(__dirname + '/public')) 
  .use(favicon(__dirname + '/public/favicon.ico'))
  .use(function(req, res, next) {
    if (typeof(req.session.todolist) == 'undefined') {
      req.session.todolist = [];
    }
    next();
  });

app.get('/todo', function(req, res) {
  // display todolist
  res.render('todolist.ejs', {todolist: req.session.todolist});
})
  .post('/todo/add', urlencodedParser, function(req, res) {
    if (req.body.newtodo != 'undefined' && req.body.newtodo != '') {
      req.session.todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
  })
  .get('/todo/delete/:id', function(req, res) {
    if (req.params.id != 'undefined' && !isNaN(req.params.id)) {
      req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
  })
  .use(function(req, res, next){
    res.redirect('/todo');
  });

app.listen(8080, 'localhost');