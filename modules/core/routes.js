const infoRouter = require ('../info/infoRoutes');

function routes(app) {
  app.use('/info', infoRouter);
}

module.exports = routes;
