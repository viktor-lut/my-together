const  mongoose = require('mongoose');

const groupSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
      unique: true,
      match: /^[A-Z][A-Za-z0-9\s]{1,15}$/,
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
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
      required: true,
      enum: ['members', 'all'],
    },
  },
  { timestamps: {} },
);

module.exports = mongoose.model('Group', groupSchema);
