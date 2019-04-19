const jwt = require('jsonwebtoken');
const message = require('../../core/message');
const User = require('./../userModel');
const bcrypt = require('bcryptjs');

const userLogin = async (req, res) => {
  const {email: rawEmail = '', password} = req.body;
  const email = rawEmail.trim().toLowerCase();

  try {
    const user = await getUserByEmail(email);

    if (user.success) {
      const isCorrectPassword = bcrypt.compareSync(
        password,
        user.payload.password,
      );

      if (isCorrectPassword) {
        const token = generateToken(
          user.payload.email,
          user.payload._id.toString(),
        );

        delete user.payload.password;

        res.status(200).json(
          message.success('Auth successful', {
            token,
            user: user.payload,
          }),
        );
      } else {
        res
          .status(500)
          .json(message.fail('Auth fail. Incorrect login or password'));
      }
    } else {
      res
        .status(500)
        .json(message.fail('Auth fail. Incorrect login or password'));
    }
  } catch (e) {
    res.status(500).json(message.fail('Auth fail error', e));
  }
};

function getUserByEmail(email) {
  return User.findOne({email: email})
    .select('-__v +password')
    .exec()
    .then(user => {
      if (user._doc) {
        return message.success('User ok', user._doc);
      }
      return message.fail('User not found');
    })
    .catch(error => {
      return message.fail('Get user by id. Error', error);
    });
}

function generateToken(email, userId) {
  return jwt.sign(
    {
      email,
      userId,
    },
    process.env.JWT_KEY,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );
}

module.exports = userLogin;
