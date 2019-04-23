const message = require('../../core/message');
const User = require('./../userModel');

const userGetAll = (req, res) => {
  User.find()
    .select()
    .exec()
    .then(docs => {
      res.status(200).json(message.success('User Get All', docs));
    })
    .catch(err => {
      res.status(500).json(message.fail('Get all error', err.message));
    });
};

module.exports = userGetAll;
