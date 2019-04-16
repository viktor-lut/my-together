const message = require('../../core/message');
const Event = require('../eventModel');

const eventGetAll = (req, res) => {
  Event.find()
    .sort({createdAt: -1})
    .select('-__v')
    .exec()
    .then(docs => {
      res.status(200).json(message.success('Events are showed', docs));
    })
    .catch(err => {
      res.status(500).json(message.fail('Get all events error', err));
    });
};

module.exports = eventGetAll;
