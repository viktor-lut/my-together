const User = require('./../userModel');

async function checkIfUserExists(email) {
  return User.findOne({email: email})
    .then(email => !!email)
    .catch(() => false);
}

module.exports = checkIfUserExists;
