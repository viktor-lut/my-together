const message = require('../../core/message');

const groupGetAll = (req, res) => res.status(200).json(message.success('groupGetAll'));

module.exports = groupGetAll;
