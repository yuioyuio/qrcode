'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({encoded: false}))
app.use(bodyParser.json())

// we use this for now as it'll allow us to read our objects from the filesystem
var fs = require('fs');

var routes = require('./routes');
routes(app);

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
