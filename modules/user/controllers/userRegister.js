const mongoose = require('mongoose');
const message = require('../../core/message');
const User = require('./../userModel');
const bcrypt = require('bcryptjs');

const userRegister = async (req, res) => {
  const {email: rawEmail = '', password, phone, name} = req.body;
  const email = rawEmail.trim().toLowerCase();

  const isUserExists = await checkIfUserExists(email);
  if (isUserExists)
    return res
      .status(409)
      .json(message.fail('User with this email already exists', email));

  const createdUser = await createUser({email, password, phone, name});

  if (createdUser.success) {
    return res
      .status(201)
      .json(
        message.success(
          'User was created successfully. Please check and verify your email',
        ),
      );
  } else {
    return res
      .status(404)
      .json(message.fail('User was not created', createdUser.message));
  }
};

async function checkIfUserExists(email) {
  return User.findOne({email: email})
    .then(email => !!email)
    .catch(() => false);
}

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

const hashPassword = password => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports = userRegister;
