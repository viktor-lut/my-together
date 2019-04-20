const message = require('../../core/message');
const Event = require('../eventModel');

const eventGetById = (req, res) => {
  const {eventId} = req.params;

  Event.findById(eventId)
    .select('-__v')
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(message.success('The event is found', doc));
      } else {
        res.status(404).json(message.fail('No event for provided id'));
      }
    })
    .catch(err => {
      res.status(500).json(message.fail('Incorrect event id', err.message));
    });
};

module.exports = eventGetById;
