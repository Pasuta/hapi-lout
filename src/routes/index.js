const routes = [
  require('./v1/add'),
  require('./v1/diff'),
];

exports.initialize = (server) => {
  routes.forEach((route) => route.initialize(server));
};
