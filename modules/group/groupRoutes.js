const router = require('express').Router();
const groupGetAll = require('./controllers/groupGetAll');
const groupCreate = require('./controllers/groupCreate');
const groupGetById = require('./controllers/groupGetById');
const groupUpdateById = require('./controllers/groupUpdateById');

router.get('/', groupGetAll);

router.post('/', groupCreate);

router.get('/:groupId', groupGetById);

router.patch('/:groupId', groupUpdateById,);

module.exports = router;
