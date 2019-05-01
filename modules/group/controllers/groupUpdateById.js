const message = require('../../core/message');
const Group = require('../groupModel');

const groupUpdateById = (req, res) => {
  const id = req.params.groupId;
  const options = {runValidators: true, context: 'query'};

  Group.updateOne({_id: id}, {$set: req.body}, options)
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json(message.success('Group updated successfully', id));
      } else {
        res.status(404).json(message.fail('Group not found', id));
      }
    })
    .catch(err => {
      res.status(500).json(message.fail('Group update error', err.message));
    });
};

module.exports = groupUpdateById;
