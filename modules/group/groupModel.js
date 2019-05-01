const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const groupSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      unique: 'Group name must be unique',
      default: '',
      match: [
        /^[A-Za-z0-9\s!@#$%^&*()_+=\-`~\][{}|';:/.,?><]{2,255}$/,
        'Incorrect name format',
      ],
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Owner id must be specified'],
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
      required: [true, 'Access type must be specified'],
      enum: ['members', 'all'],
    },
  },
  {timestamps: {}},
);

groupSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Group', groupSchema);
