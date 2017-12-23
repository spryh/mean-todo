"use strict"

var express = require("express")
//var todosArr = require('../../mock/todos.json')

// Reference the Todo model with conventional capitalization:
var Todo = require("../models/todo")

// Router will automatically prefix /api to namespace
var router = express.Router()

// TODO: Add GET route to retrieve entries

router.get('/todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      // Better handling then console logging. 500 is an internal server error.
      return res.status(500).json({ message: err.message })
    }
    res.json({ todos: todos })
  })
})

// TODO: Add POST route to create new entries
router.post('/todos', (req, res) => {
  var todo = req.body
  // res.send(todo)
  Todo.create(todo, (err, todo) => {
    if (err) {
      return res.status(500).json({ message: err.message })
    }
    res.json({'todo': todo, message: 'Todo Created' })
  })
})

// TODO: Add PUT route to update existing entries
router.put('/todos/:id', (req, res) => {
  var todo = req.body
  var id = req.params.id

  if (todo && todo._id !== id) {
    return res.status(500).json({ err: "Document ID's dont match." })
  }

  // Use with option new to return updated data
  Todo.findByIdAndUpdate(id, todo, {new: true}, (err, todo) => {
    if (err) {
      return res.status(500).json({ message: err.message })
    }
    res.json({'todo': todo, message: 'Todo Updated' })
  })
})

// TODO: Add DELETE route to delete entries
router.delete('/todos/:id', function(req, res) {
  var id = req.params.id;
  Todo.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Todo Deleted' });
  });
});

module.exports = router
