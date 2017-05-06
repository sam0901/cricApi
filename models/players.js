const bookshelf = require('../bookshelf');

const Player = bookshelf.Model.extend({
  tableName: 'players'
});

module.exports = Player;
