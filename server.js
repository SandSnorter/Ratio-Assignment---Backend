// Import required modules
const express = require('express');
const bodyParser = require("body-parser");
const moderationRoutes = require('./routes/moderation');

// Create an Express application
const app = express();

// Define the port for the server to listen on
const PORT = 8000 || process.env.PORT;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mount the moderation routes
app.use('/', moderationRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});