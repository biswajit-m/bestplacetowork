var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');

var app = express();
var port = 3456;

// Implement middleware here.
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(port, function() {
	console.log('Server is litening on port:' + chalk.green(port));
});
