const message = require('./message');

function errorHandling(app) {
  app.use((req, res, next) => res.status(404).json(message.fail('API not found'))); // eslint-disable-line no-unused-vars

  app.use((error, req, res, next) => {
    // eslint-disable-line no-unused-vars
    res.status(error.status || 500);
    res.json(message.fail(error.message));
  });
}

module.exports = errorHandling;
