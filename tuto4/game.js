//https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/les-evenements-18

var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();
game.on('gameover', function(message) {
  console.log(message);
});

game.emit('gameover', 'You lose, young bastard!');