const message = require('../../core/message');
const Group = require('../groupModel');

const groupUpdateById = (req, res) => {
  const id = req.params.groupId;

  Group.updateOne({_id: id}, {$set: req.body})
    .exec()
    .then(doc => {
      if (doc.n) {
        res
          .status(200)
          .json(message.success('Group updated successfully.', id));
      } else {
        res.status(404).json(message.fail('No group for provided id.', id));
      }
    })
    .catch(err => {
      res
        .status(500)
        .json(message.fail('Group cannot be updated.', err.message));
    });
};

module.exports = groupUpdateById;
