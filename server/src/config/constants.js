const envConfig = require('dotenv');

// Environment configuration
envConfig.config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGO_URI,
  BASE_URL: process.env.BASE_URL,
};
