const message = require('../../core/message');
const Group = require('../groupModel');

const groupUpdateById = (req, res) => {
  const id = req.params.groupId;

  Group.updateOne({ _id: id }, { $set: req.body })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json(message.success('Group updated'));
      } else {
        res.status(400).json(message.fail('Group not found'));
      }
    })
    .catch(err => {
      res.status(500).json(message.fail('Incorrect request or group id', err));
    });
};

module.exports = groupUpdateById;
