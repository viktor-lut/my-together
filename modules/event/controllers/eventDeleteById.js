const message = require('../../core/message');

const eventDeleteById = (req, res) => {
  res.status(200).json(message.success('eventDeleteById', req.params.eventId));
};

module.exports = eventDeleteById;
