'use strict'

var express = require('express')

// Router will automatically prefix /api to namespace
var router = express.Router()

router.get('/todos', (req,res) => {
    res.json ({text: 'These are the todos!'})
})

// TODO: Add POST route to create new entries
// TODO: Add PUT route to update existing entries
// TODO: Add DELETE route to delete entries

module.exports = router