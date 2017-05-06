module.exports = [
  {
    in: 'body',
    name: 'body',
    description: 'Created Player Object',
    required: true,
    schema: {
      $ref: '#/definitions/Player'
    }
  }
];
