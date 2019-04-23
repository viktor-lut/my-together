const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const groupSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: [true, 'No name'],
      unique: true,
      match: [/^[A-Z]{1}[A-Za-z0-9\s]{0,14}$/, 'Incorrect name format'],
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'No owner'],
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
      },
    ],
    accessType: {
      type: String,
      required: [true, 'No access type'],
      enum: ['members', 'all'],
    },
  },
  {timestamps: {}},
);

groupSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Group', groupSchema);
