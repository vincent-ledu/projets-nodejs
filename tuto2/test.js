// https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/une-premiere-application-avec-node-js
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hi folks!');
});
server.listen(8080);
