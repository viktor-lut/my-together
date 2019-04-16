const mongoose = require('mongoose');
const message = require('../../core/message');
const Group = require('../groupModel');

const groupCreate = (req, res) => {
  const _id = new mongoose.Types.ObjectId();

  const {name, accessType, description, owner} = req.body;

  const group = new Group({
    _id,
    name,
    description,
    accessType,
    owner,
    members: [owner],
  });

  // Send back group id for redirect to new group after creating
  const payload = {
    groupId: _id,
  };

  return group
    .save()
    .then(() => {
      return res.status(201).json(message.success('Group created', payload));
    })
    .catch(err => {
      if (err.code === 11000)
        return message.fail('Group with entered name exist');
      return res.status(500).json(message.fail('Incorrect request', err));
    });
};

module.exports = groupCreate;
