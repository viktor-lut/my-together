const express = require('express');
const mongoConnection = require('./modules/core/mongoConnection');
const parseResponse = require('./modules/core/parseResponse');
const logger = require('./modules/core/logger');
const routes = require('./modules/core/routes');
const errorHandling = require('./modules/core/errorHandling');
const ignoreFavicon = require('./modules/core/ignoreFavicon');
const cors = require('./modules/core/cors');

const PORT = +process.env.PORT || 5000;
const app = express();

mongoConnection();
logger(app);
parseResponse(app);
cors(app);
routes(app);
ignoreFavicon(app);
errorHandling(app);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
