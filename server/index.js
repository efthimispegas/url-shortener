// import express package(commonJS syntax)
const express = require('express');

// instatiate the express app
const app = express();

const PORT = process.env.PORT || 3001;
// Listen for incoming requests
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));
