const express = require('express');
const dbConfig = require('./src/config/db');
const env = require('./src/config/constants');
const cors = require('cors');
const app = express();

// Database configuration
dbConfig();

// Middleware configuration
app.use(express.json({ extended: false }));
app.use(cors());

// Routes configuration
app.use('/api', [
  require('./src/routes/redirect'),
  require('./src/routes/url'),
]);

// Listen for incoming requests
const PORT = env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started, listening PORT ${PORT}`));
