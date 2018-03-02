var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static(__dirname));

app.use(function(req, res) {
  res.sendfile(__dirname + '/index.html'); // rota para SPA
});

app.listen(3000, function () {
	console.log('SERVER RODANDO');
});