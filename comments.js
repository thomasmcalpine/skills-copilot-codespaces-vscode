// Create web server
// 1. require express
// 2. create an instance of express
// 3. create a route that sends a response
// 4. start the server

const express = require('express');
const app = express();
const comments = require('./comments.json');

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});