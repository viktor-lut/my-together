const router = require('express').Router();
const userGetAll = require('./controllers/userGetAll');
const userGetById = require('./controllers/userGetById');
const userUpdateById = require('./controllers/userUpdateById');
const userDeleteById = require('./controllers/userDeleteById');
const userRegister = require('./controllers/userRegister');
const userLogin = require('./controllers/userLogin');
const userCheckToken = require('./controllers/userCheckToken');

router.get('/', userGetAll);

router.get('/:userId', userGetById);

router.patch('/:userId', userUpdateById);

router.delete('/:userId', userDeleteById);

router.post('/register', userRegister);

router.post('/login', userLogin);

router.post('/token', userCheckToken);

module.exports = router;
