const express = require('express');
const app = express();

// Built-in Middleware to parse JSON
app.use(express.json());

// Custom Middleware - Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route 1 - Homepage
app.get('/', (req, res) => {
  res.send(' Welcome to the Express Server!');
});

// Route 2 - About Page
app.get('/about', (req, res) => {
  res.send(' This is my about page.');
});

// Route 3 - Contact (using query parameter)
app.get('/contact', (req, res) => {
  const name = req.query.name || 'Celebal';
  res.send(` Hello, ${name}! How can i help you today?`);
});

module.exports = app;
