const parameters = require('../../../parameters/v1/player/post_player');
const responses = require('../../../responses/v1/player/post_player');

module.exports = {
  tags: [
    "Player" 
  ],
  description: "API to post a player",
  operationId: "postPlayer",
  produces: [
    "application/json"
  ],
  parameters,
  responses
};
