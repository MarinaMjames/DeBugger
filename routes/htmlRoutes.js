// node packages
var express = require('express');
var path = require('path');

// setup router
var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile('../public/index.html');
});

router.get('/game', function(req, res) {
	res.sendFile(path.resolve("public/game.html"));
});
module.exports = router;