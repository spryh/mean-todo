'use strict'

var express = require('express')

var app = express()

app.use('/', express.static('public'))

// Router will automatically prefix /api to namespace
var router = express.Router()
app.use('/api', router)

router.get('/todos', (req,res) => {
    res.json ({text: 'These are the todos!'})
})

// TODO: Add POST route to create new entries
// TODO: Add PUT route to update existing entries
// TODO: Add DELETE route to delete entries

app.listen(3000, ()=> console.log("Server Running on port 3000!") )
