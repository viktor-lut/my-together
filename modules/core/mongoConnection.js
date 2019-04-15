const mongoose = require('mongoose');

const connectionString = process.env.MONGO_CONNECTION_STRING;

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  autoIndex: false,
};

function mongoConnection() {
  mongoose
    .connect(connectionString, options)
    // eslint-disable-next-line no-console
    .catch(err => console.log(err));

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    // eslint-disable-next-line no-console
    console.log('Mongoose default connection disconnected');
  });
}

module.exports = mongoConnection;
