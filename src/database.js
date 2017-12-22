'use strict'

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mean-todo', err => {
    if(err){console.log('Failed to connect to mongo-todo database')}
    else {console.log('Connected to mongo-todo database')}
})