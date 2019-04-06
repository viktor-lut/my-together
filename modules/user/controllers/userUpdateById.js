const message = require('../../core/message');

const userUpdateById = (req, res) => res.status(200).json(message.success('Changes details', req.params.userId));

module.exports = userUpdateById;
