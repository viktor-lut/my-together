const message = require('../../core/message');

const userGetById = (req, res) => res.status(200).json(message.success('User Get By Id', req.params.userId));

module.exports = userGetById;
