var express = require('express');
var app = express();

var utils = require('./app/utility');

app.use(express.static("public"));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/view/index.html');
});

app.listen(8090, () => {
	console.log('ser ver is running');
});