const tags = require('./tags');
const paths = require('./paths');
const info = require('./info');

module.exports = {
  "swagger": "2.0",
  "info": info,
  //"basePath": "/v1",
  "tags" : tags,
  "schemes": ["http"],
  "consumes": ["application/json"],
  "produces": ["application/json"],
  "paths": paths
};
