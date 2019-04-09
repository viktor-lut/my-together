const message = require('../../core/message');

const eventCreate = (req, res) => {
    res.status(200).json(message.success('eventCreate'));
};

module.exports = eventCreate;
