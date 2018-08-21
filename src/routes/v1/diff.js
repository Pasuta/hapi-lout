const Joi = require('joi');

exports.initialize = (server) => {
  server.route({
    path:'/1.0/diff',
    method: 'POST',
    config: {
      handler: (request, h) => {
        const diff = parseInt(request.payload.a) - parseInt(request.payload.b);
        return h.response(diff);
      },
      description: 'Get algebraic difference',
      notes: 'Pass two numbers as a & b and returns difference',
      tags: ['api'],
      validate: {
        payload: {
          a : Joi.number().required(),
          b : Joi.number().required(),
        }
      }
    }
  });
};
