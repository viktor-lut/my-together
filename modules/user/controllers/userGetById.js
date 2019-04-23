const message = require('../../core/message');
const User = require('./../userModel');

const userGetById = (req, res) => {
  const id = req.params.userId;
  User.findById(id)
    .select()
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(message.success('User Get By Id', doc));
      } else {
        res.status(404).json(message.success('User not found', id));
      }
    })
    .catch(err => {
      res.status(500).json(message.fail('User Get By Id error', err.message));
    });
};

module.exports = userGetById;
