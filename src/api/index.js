"use strict"

var express = require("express")
//var todosArr = require('../../mock/todos.json')

// Reference the Todo model with conventional capitalization:
var Todo = require("../models/todo")

// Router will automatically prefix /api to namespace
var router = express.Router()

// TODO: Add GET route to retrieve entries

router.get('/todos', (req, res) => {
  Todo.find({}, (err, todosArr) => {
    if (err) {
      // Better handling then console logging. 500 is an internal server error.
      return res.status(500).json({ message: err.message })
    }
    res.json({ todos: todosArr })
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
// TODO: Add DELETE route to delete entries

module.exports = router
