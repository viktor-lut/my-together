const message = require('../../core/message');

const userGetAll = (req, res) => res.status(200).json(message.success('Users were showed'));

module.exports = userGetAll;
