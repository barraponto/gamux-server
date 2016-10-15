'use strict';

var _ = require('underscore');

module.exports = function(io){
  return function(socket, next){
    socket.on('lobby:list', function(){
      // @TODO: list authenticated user names.
      console.log(io.sockets.connected);
      socket.emit('lobby:list',
        _.map(io.sockets.connected, socket => socket.id));
    });
    next();
  };
};
