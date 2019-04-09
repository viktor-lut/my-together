const mongoose = require('mongoose');
const message = require('../../core/message');
const User = require('./../userModel');
const bcrypt = require('bcryptjs');

const userRegister = async (req, res) => {
  const { email: rawEmail, password, phone, name } = req.body;
  const email = rawEmail.trim().toLowerCase();

  const createdUser = await createUser({ email, password, phone, name });

  if (createdUser.success) {
    return res
      .status(200)
      .json(
        message.success(
          'User created successfully. Please check your email and verify it',
        ),
      );
  } else {
    return res.status(404).json(message.fail('User was not created'));
  }
};


async function createUser({ email, password, phone, name }) {
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
      return message.success('User created successfully');
    })
    .catch(error => {
      if (error.code === 11000) return message.fail('User with entered email exist');
      return message.fail('Error', error);
    });
}

const hashPassword = password => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports = userRegister;
