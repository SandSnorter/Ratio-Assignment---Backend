// Load environment variables from .env file
require('dotenv').config();

// Import the Express module
const express = require("express");

// Create a router instance
const router = express.Router();

// Import the OpenAI module
const { OpenAI } = require('openai');

// Get the OpenAI API key from environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Create an instance of the OpenAI class with the API key
const openai = new OpenAI(OPENAI_API_KEY);

// Handle POST requests to the specified route
router.post('/', async (req, res) => {
  
  // Extract the input text from the request body
  const inputText = req.body.input;
  
  try {
    // Make a moderation request using the OpenAI instance
    const response = await openai.moderations.create({
      input: inputText
    });

    // Send the response as JSON
    res.json(response);
  } catch (error) {
    // Log the error if there is an exception
    console.log(error);
    
    // Send a 500 status with the error message
    res.status(500).send(error.message);
  }
});

// Export the router module
module.exports = router;