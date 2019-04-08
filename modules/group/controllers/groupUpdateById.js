const message = require('../../core/message');

const groupUpdateById = (req, res) => {
    const id = req.params.groupId;
    res.status(200).json(message.success('groupUpdateById', id))
};

module.exports = groupUpdateById;
