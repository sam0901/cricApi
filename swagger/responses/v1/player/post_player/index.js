module.exports = {
  '200': {
    description: 'Successfully posted a player',
    schema: {
      $ref: "#/definitions/Player"
    }
  },
  '400': {
    description: 'Invalid Player'
  }
};
