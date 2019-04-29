const jwt = require('jsonwebtoken');
const message = require('../../core/message');

const userCheckToken = (req, res) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_KEY);
    res.status(200).json(message.success('Token is valid'));
  } catch (error) {
    res.status(500).json(message.fail('Token is not valid'));
  }
};

module.exports = userCheckToken;
