const getPlayer = require('./get_player');
const postPlayer = require('./post_player');

module.exports = {
  "x-swagger-router-controller": "v1",
  get: getPlayer,
  post: postPlayer
};
