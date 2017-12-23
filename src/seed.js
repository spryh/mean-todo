"use strict"

var Todo = require("./models/todo.js")

var todosArr = [
    "Feed the kids", 
    "Walk the dog", 
    "Water the plants"
]

todosArr.forEach((todo, index) => {
// Find the todo, or add it provided no error
  Todo.find({"name": todo}, (err, todosArr) => {
    if (!err && !todosArr.length) {
        Todo.create({completed: false, name: todo})
    }
  })
})
