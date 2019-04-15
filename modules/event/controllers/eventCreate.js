const mongoose = require('mongoose');
const message = require('../../core/message');
const Event = require('../eventModel');

const eventCreate = (req, res) => {
  const _id = new mongoose.Types.ObjectId();

  const {
    name,
    description = '',
    owner,
    date,
    location,
    active = false,
  } = req.body;

  const event = new Event({
    _id,
    name,
    description,
    owner,
    date,
    location,
    active,
    members: [owner],
  });

  // Send back event id for redirect to new event after creating
  const payload = {
    eventId: _id,
  };

  return event
    .save()
    .then(() => {
      return res.status(201).json(message.success('Event created', payload));
    })
    .catch(err => {
      return res
        .status(500)
        .json(message.fail('Event create error', err.message));
    });
};

module.exports = eventCreate;
