const message = require('../../core/message');
const createUser = require('./userCreate');

const userRegister = async (req, res) => {
  const {email: rawEmail = '', password, phone, name} = req.body;
  const email = rawEmail.trim().toLowerCase();

  if (!isStrongPassword(password))
    return res
      .status(409)
      .json(
        message.fail(
          'Password must contain at least one letter, one digit and be 6-124 characters in length',
        ),
      );

  const createdUser = await createUser({email, password, phone, name});

  if (createdUser.success) {
    return res
      .status(201)
      .json(
        message.success(
          'User was created successfully. Please check and verify your email',
          createdUser.payload,
        ),
      );
  } else {
    return res
      .status(404)
      .json(message.fail('User was not created', createdUser.payload));
  }
};

function isStrongPassword(password) {
  return password.match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9~!@#$%&*_:]{6,124}$/);
}

module.exports = userRegister;
