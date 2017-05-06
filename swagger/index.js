const info = require('./info');
const tags = require('./tags');
const paths = require('./paths');
const definitions = require('./definitions');

const swaggerJson = {
  swagger: '2.0',
  info: info,
  tags: tags,
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: paths,
  definitions: definitions
};

module.exports = swaggerJson;
