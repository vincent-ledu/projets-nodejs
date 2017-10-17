// JavaScript Document

var http = require('http');

var server = http.createServer();
/*
function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});
*/
server.on('close', function() { // On �coute l'�v�nement close
  console.log('Bye bye !');
});


server.on('request', function(req, res) {   
  res.writeHead(200);
  res.end('Hello');
});



server.listen(8080); // D�marre le serveur

//server.close(); // Arr�te le serveur. D�clenche l'�v�nement close