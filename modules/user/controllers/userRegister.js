const message = require('../../core/message');

const userRegister = (req, res) => res.status(200).json(message.success('Enter e-mail and password'));

module.exports = userRegister;
