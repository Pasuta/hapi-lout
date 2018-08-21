'use strict';

const hapi = require('hapi');
const inert = require('inert');
const lout = require('lout');
const vision = require('vision');

const routes = require('./routes');

const port = 3030;
const host = 'localhost';

const server = hapi.server({port, host});

const swaggerOptions = {
  info: {
    title: 'Test API Documentation',
    version: '1.0',
  },
};

const init = async () => {
  try {
    routes.initialize(server);
    await server.register([vision, inert, lout]);

    if (!module.parent) {
      await server.start();
    }

    console.log(`Server running at: ${server.info.uri}`);

  } catch (err) {
    console.log(`App down (${err})  ${err.stack}`);
    process.exit(1);
  }
};

module.exports = server;
module.exports.init = init();
