const infoRoutes = require ('../info/infoRoutes');
const userRoutes = require ('../user/userRoutes');

function routes(app) {
  app.use('/info', infoRoutes);
  app.use('/user', userRoutes);
}

module.exports = routes;
