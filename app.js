const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const swaggerSpecJson = require('./swagger/index');
const swaggerTools = require('swagger-tools');

let port = config.port;
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const options = {
  controllers: './controllers'
};

swaggerTools.initializeMiddleware(swaggerSpecJson, middleware => {
  app.use(middleware.swaggerMetadata());
  app.use(middleware.swaggerValidator());
  app.use(middleware.swaggerRouter(options));
  app.use(middleware.swaggerUi());
});

const portString = (config.port) ? `:${config.port}`: '';
console.log(`App Started!!!! Go to http://${config.domain}${portString}/docs`);
app.listen(port);
