const message = require('../../core/message');

const userDeleteById = (req, res) => res.status(200).json(message.success('Deleted user!', req.params.userId));

module.exports = userDeleteById;
