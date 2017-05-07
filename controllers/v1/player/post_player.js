const Boom = require('boom');
const Player = require('../../../models/players');

module.exports = (req, res) => {
  const player = new Player(req.swagger.params.body.value);
  return player.save()
    .then(() => Player
      .where({ email: player.attributes.email })
      .fetch()
    )
    .then(dbRes => {
      res.json({ id: dbRes.attributes.id });
    })
    .catch(err => {
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(400).send(Boom.badRequest('email already exists').output.payload);
      } else {
        res.status(400).send(err);
      }
    });
};
