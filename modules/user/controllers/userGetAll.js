const message = require('../../core/message');

const userGetAll = (req, res) => res.status(200).json(message.success('User Get All'));

module.exports = userGetAll;
