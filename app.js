var express = require('express');
var app = express();
const fs = require('fs')
// Routes
app.get('/', function(req, res) {
  fs.readFile('/src/person.json', 'utf8', function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);
  })
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);