const Joi = require('joi');

exports.initialize = (server) => {
  server.route({
    path:'/1.0/add',
    method: 'POST',
    config: {
      handler: (request, h) => {
        const sum = parseInt(request.payload.a) + parseInt(request.payload.b);
        return h.response(sum);
      },
      description: 'Get algebraic sum',
      notes: 'Pass two numbers as a & b and returns sum',
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
