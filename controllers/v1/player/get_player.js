const Player = require('../../../models/players');
const Boom = require('boom');

module.exports = (req, res) =>
  Player
    .where({ username: req.swagger.params.username.value})
    .fetch()
    .then(dbRes => {
      if (dbRes) {
        res.json({ data: dbRes });
      } else {
        res.status(404).send(Boom.notFound('player does not exist').output.payload);
      }
    })
    .catch(err => {
      res.status(400).send(Boom.badRequest('Some Error occurred'));
    });
