const infoRoutes = require ('../info/infoRoutes');
const userRoutes = require ('../user/userRoutes');
const groupRoutes = require ('../group/groupRoutes');

function routes(app) {
  app.use('/info', infoRoutes);
  app.use('/user', userRoutes);
  app.use('/group', groupRoutes);
}

module.exports = routes;
