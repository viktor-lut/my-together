const mongoose = require('mongoose');
const message = require('../../core/message');
const User = require('./../userModel');
const bcrypt = require('bcryptjs');

const hashPassword = password => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

async function createUser({email, password, phone, name}) {
  const userId = new mongoose.Types.ObjectId();
  const emailHashConfirmation = new mongoose.Types.ObjectId();

  const user = new User({
    _id: userId,
    email,
    emailConfirmation: {
      hash: emailHashConfirmation,
      confirmed: false,
    },
    name,
    phone,
    phoneConfirmation: {
      code: Math.random()
        .toString()
        .slice(-5),
      confirmed: false,
    },
    password: hashPassword(password),
    roles: [],
  });

  return user
    .save()
    .then(() => {
      return message.success('User was created successfully');
    })
    .catch(error => {
      return message.fail('User was not created', error.message);
    });
}

module.exports = createUser;
