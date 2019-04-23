const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
      type: String,
      required: [true, 'No email'],
      unique: true,
      match: [
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        'Incorrect email format',
      ],
    },
    emailConfirmation: {
      hash: {type: String, select: false},
      confirmed: {
        type: Boolean,
        default: false,
      },
    },
    name: {
      type: String,
      required: [true, 'No name'],
      unique: false,
      match: [/^[A-Z][a-z]{1,15}\s[A-Z][a-z]{1,15}$/, 'Incorrect name format'],
    },
    phone: {
      type: String,
      required: [true, 'No phone'],
      unique: true,
      match: [/^\+[0-9]{11,12}$/, 'Incorrect phone format'],
    },
    phoneConfirmation: {
      code: {type: String, select: false},
      confirmed: {
        type: Boolean,
        default: false,
      },
    },
    password: {
      type: String,
      select: false,
      required: [true, 'No password'],
    },
    resetPassword: {
      hash: {type: String, select: false},
      date: {
        type: Date,
        required: false,
      },
      history: [
        {
          date: Date,
        },
      ],
    },
    links: {
      linkedIn: {
        type: String,
        required: false,
      },
      facebook: {
        type: String,
        required: false,
      },
      instagram: {
        type: String,
        required: false,
      },
    },
    roles: [
      {
        type: String,
        required: false,
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
    },
  },
  {timestamps: {}},
);

module.exports = mongoose.model('User', userSchema);
