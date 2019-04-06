const message = require('../../core/message');

const userLogin = (req, res) => res.status(200).json(message.success('Enter login and password'));

module.exports = userLogin;
