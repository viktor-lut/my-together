const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const eventSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required'],
      unique: 'Event name must be unique',
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
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    location: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {timestamps: {}},
);

eventSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Event', eventSchema);
