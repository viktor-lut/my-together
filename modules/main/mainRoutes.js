const router = require('express').Router();
const main = require('./mainControllers');

router.get('/', main);

module.exports = router;
