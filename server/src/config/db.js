const mongoose = require('mongoose');
const env = require('./constants');

// establishing a database connection
const dbConfig = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set('debug', true);
  mongoose.connection
    .once('open', () => {
      console.log('MongoDB is up and running!');
    })
    .on('error', err => console.error(err));
};

module.exports = dbConfig;
