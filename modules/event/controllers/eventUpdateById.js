const message = require('../../core/message');
const Event = require('../eventModel');

const eventUpdateById = (req, res) => {
  const {eventId} = req.params;
  const options = {runValidators: true, context: 'query'};

  Event.updateOne({_id: eventId}, {$set: req.body}, options)
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json(message.success('Event updated'));
      } else {
        res.status(400).json(message.fail('Event not found'));
      }
    })
    .catch(err => {
      res
        .status(500)
        .json(message.fail('Incorrect request or event id', err.message));
    });
};

module.exports = eventUpdateById;
