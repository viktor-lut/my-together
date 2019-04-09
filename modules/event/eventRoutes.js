const router = require('express').Router();
const eventGetAll = require('./controllers/eventGetAll');
const eventCreate = require('./controllers/eventCreate');
const eventGetById = require('./controllers/eventGetById');
const eventUpdateById = require('./controllers/eventUpdateById');
const eventDeleteById = require('./controllers/eventDeleteById');

router.get('/', eventGetAll);
router.post('/create', eventCreate);
router.get('/:eventId', eventGetById);
router.patch('/:eventId', eventUpdateById);
router.delete('/:eventId', eventDeleteById);

module.exports = router;
