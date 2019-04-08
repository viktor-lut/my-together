const message = require('../../core/message');

const groupCreate = (req, res) => res.status(200).json(message.success('groupCreate'));

module.exports = groupCreate;
