// Import the Express.js framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Define a route for "/about"
app.get('/about', (req, res) => {
  res.send('About Us');
});

// Define a route for "/contact"
app.get('/contact', (req, res) => {
  res.send('Contact Us');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
