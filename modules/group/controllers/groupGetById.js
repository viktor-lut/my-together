const message = require('../../core/message');
const Group = require('../groupModel');

const groupGetById = (req, res) => {
  const { groupId } = req.params;

  Group.findById(groupId)
    .select('-__v')
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(message.success('The group is found', doc));
      } else {
        res.status(404).json(message.fail('No group for provided id'));
      }
    })
    .catch(err => {
      res.status(500).json(message.fail('Incorrect group id', err));
    });
};

module.exports = groupGetById;
