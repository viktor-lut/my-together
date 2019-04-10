const message = require('../../core/message');
const User = require('./../userModel');

const userUpdateById = (req, res) => {
  const id = req.params.userId;
  User.updateOne({ _id: id }, { $set: req.body })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json(message.success('User updated successfully'));
      } else {
        res.status(400).json(message.fail('User not found'));
      }
    })
    .catch(err => {
      res.status(500).json(message.fail(err));
    });
};

module.exports = userUpdateById;
