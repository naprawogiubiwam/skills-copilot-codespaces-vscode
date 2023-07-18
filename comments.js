// Create web server 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');
const comments = require('./comments.json');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get specific comment
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const foundComment = comments.find(comment => comment.id === id);
  res.json(foundComment);
});

// Add new comment
app.post('/comments', (req, res) => {
  const newComment = {
    id: req.body.id,
    name: req.body.name,
    comment: req.body.comment
  };
  comments.push(newComment);
  res.json(newComment);
});

// Update comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const foundComment = comments.find(comment => comment.id === id);
  foundComment.name = req.body.name;
  foundComment.comment = req.body.comment;
  res.json(foundComment);
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const foundComment = comments.find(comment => comment.id === id);
  const commentIndex = comments.indexOf(foundComment);
  comments.splice(commentIndex, 1);
  res.json(foundComment);
});

// Run server
app.listen(port, () => console.log(`Listening on port ${port}`));