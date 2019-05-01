const message = require('../../core/message');
const Group = require('../groupModel');

const groupGetById = (req, res) => {
  const {groupId} = req.params;

  Group.findById(groupId)
    .select('-__v')
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(message.success('Group is found', doc));
      } else {
        res.status(404).json(message.fail('Group not found', groupId));
      }
    })
    .catch(err => {
      res.status(500).json(message.fail('Group Get By Id error', err.message));
    });
};

module.exports = groupGetById;
