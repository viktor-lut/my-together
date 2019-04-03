const router = require('express').Router();
const info = require('./infoControllers');

router.get('/', info);

module.exports = router;
