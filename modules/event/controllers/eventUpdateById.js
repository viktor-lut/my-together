const message = require('../../core/message');

const eventUpdateById = (req, res) => {
  res.status(200).json(message.success('eventUpdateById', req.params.eventId));
};

module.exports = eventUpdateById;
