var adminapi = require ('./admin./admin')
var userapi = require ('./user./user')

var express = require('express')
var app = express()
app.use(express.json())
var {MongoClient} = require('mongodb')

app.use(adminapi)
app.use(userapi)

app.listen(4000)