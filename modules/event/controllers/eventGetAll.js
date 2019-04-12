const message = require('../../core/message');

const eventGetAll = (req, res) => {
  res.status(200).json(message.success('eventGetAll'));
};

module.exports = eventGetAll;
