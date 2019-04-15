const message = require('./message');

function errorHandling(app) {
  app.use((req, res) => res.status(404).json(message.fail('API not found')));

  app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json(message.fail(error.message));
  });
}

module.exports = errorHandling;
