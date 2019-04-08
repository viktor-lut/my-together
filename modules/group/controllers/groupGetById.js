const message = require('../../core/message');

const groupGetById = (req, res) => {
    const id = req.params.groupId;
    res.status(200).json(message.success('groupGetById', id))
};

module.exports = groupGetById;
