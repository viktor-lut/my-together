const message = require('./../core/message');

const main = (req, res) => {

  const answer = '\'Together\' - is a web-application that allows a user to create a social event ' +
        'and post it publicly to all users or within a specified group of users. ' +
        'Any user can join/share/comment on the event. Any event can be geographically filtered/located.';

  res.status(200).json(message.success('Main Get', answer));
};

module.exports = main;
