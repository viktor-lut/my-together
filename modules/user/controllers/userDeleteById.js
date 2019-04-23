const message = require('../../core/message');
const User = require('./../userModel');

const userDeleteById = (req, res) => {
  const id = req.params.userId;
  User.remove({_id: id})
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json(message.success('User deleted successfully', id));
      } else {
        res.status(404).json(message.fail('User not found', id));
      }
    })
    .catch(err => {
      res
        .status(500)
        .json(message.fail('User Delete By Id error', err.message));
    });
};

module.exports = userDeleteById;
