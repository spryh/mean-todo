'use strict'

var express = require('express')

var app = express()

app.use('/', express.static('public'))
app.listen(3000, ()=> console.log("Server Running on port 3000!") )
