const infoRoutes = require ('../info/infoRoutes');
const mainRoutes = require ('../main/mainRoutes');
const userRoutes = require ('../user/userRoutes');
const groupRoutes = require ('../group/groupRoutes');
const eventRoutes = require ('../event/eventRoutes');

function routes(app) {
  app.use('/info', infoRoutes);
  app.use('/', mainRoutes);
  app.use('/user', userRoutes);
  app.use('/group', groupRoutes);
  app.use('/event', eventRoutes);
}

module.exports = routes;
