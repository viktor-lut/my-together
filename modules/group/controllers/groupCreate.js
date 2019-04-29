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

  return group
    .save()
    .then(() => {
      return res.status(201).json(message.success('Group created', _id));
    })
    .catch(err => {
      return res
        .status(500)
        .json(message.fail('Group was not created.', err.message));
    });
};

module.exports = groupCreate;
