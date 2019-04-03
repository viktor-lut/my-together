const express = require('express');
const logger = require('./modules/core/logger');
const routes = require('./modules/core/routes');
const errorHandling = require('./modules/core/errorHandling');
const ignoreFavicon = require('./modules/core/ignoreFavicon');

const PORT = +process.env.PORT || 5000;
const app = express();

logger(app);
routes(app);
errorHandling(app);

app.listen(PORT, () => {
  console.log(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
