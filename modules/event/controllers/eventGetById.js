const message = require('../../core/message');

const eventGetById = (req, res) => {
    res.status(200).json(message.success('eventGetById', req.params.eventId));
};

module.exports = eventGetById;
