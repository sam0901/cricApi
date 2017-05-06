const schemas = require('../database/schemas');

exports.up = (knex, Promise) =>
  Promise.all([
    schemas.players.up(knex)
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    schemas.players.down(knex)
  ]);
