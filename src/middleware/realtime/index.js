'use strict';

const lobby = require('./lobby.js');

module.exports = function(io) {
  io.use(lobby(io));
};
