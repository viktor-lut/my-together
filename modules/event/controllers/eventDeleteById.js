const message = require('../../core/message');
const Event = require('../eventModel');

const eventDeleteById = (req, res) => {
  const id = req.params.eventId;

  Event.remove({_id: id})
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json(message.success('Event deleted successfully', id));
      } else {
        res.status(400).json(message.fail('Event not found', id));
      }
    })
    .catch(err => {
      res.status(500).json(message.fail('Delete event error', err));
    });
};

module.exports = eventDeleteById;
