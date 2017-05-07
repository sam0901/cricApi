const parameters = require('../../../parameters/v1/player/get_player');
const responses = require('../../../responses/200');
module.exports = {
  tags: [
    "Player"
  ],
  summary: 'Get Player by username',
  description: "API to get hello",
  operationId: "getPlayer",
  produces: [
    "application/json"
  ],
  parameters,
  responses
};
