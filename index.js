const express = require('express');
const logger = require('./modules/core/logger');
const routes = require('./modules/core/routes');
const errorHandling = require('./modules/core/errorHandling');

const PORT = 5000;
const app = express();

logger(app);
routes(app);
errorHandling(app);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
