"use strict"

var express = require("express")
//var todosArr = require('../../mock/todos.json')

// Reference the Todo model with conventional capitalization:
var Todo = require("../models/todo")

// Router will automatically prefix /api to namespace
var router = express.Router()

router.get("/todos", (req, res) => {
  Todo.find({}, (err, todosArr) => {
    if (err) {
      return res.status(500).json({message: err.message})
    }
    res.json({ todos: todosArr })
  })
})

// TODO: Add POST route to create new entries
// TODO: Add PUT route to update existing entries
// TODO: Add DELETE route to delete entries

module.exports = router
