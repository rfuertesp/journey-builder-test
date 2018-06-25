'use strict';
// Module Dependencies
// -------------------
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

var app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Configure Express
app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});