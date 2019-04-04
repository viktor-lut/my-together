const message = require('./../core/message');

const info = (req, res) => {
  const now = new Date();

  const answer = {
    timestamp: now.getTime(),
    localeString: now.toLocaleString(),
    getTimezoneOffset: now.getTimezoneOffset(),
    tz: process.env.TZ,
    name: 'Together app v0.1.0',
  };

  res.status(200).json(message.success(answer));
};

module.exports = info;
