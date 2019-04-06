const router = require('express').Router();
const userGetAll = require('./controllers/userGetAll');
const userGetById = require('./controllers/userGetById');
const userUpdateById = require('./controllers/userUpdateById');
const userDeleteById = require('./controllers/userDeleteById');
const userRegister = require('./controllers/userRegister');
const userLogin = require('./controllers/userLogin');

router.get('/', userGetAll);

router.get('/:userId', userGetById);

router.patch('/:userId', userUpdateById);

router.delete('/:userId', userDeleteById);

router.post('/', userRegister);

router.post('/login', userLogin);

module.exports = router;
