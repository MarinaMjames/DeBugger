// node packages
var express = require('express');
// import files
var authenticate = require('../authentication/authenticate.js');
var db = require('../models');

// setup router
var router = express.Router();

router.post('/score/new', authenticate, function (req, res) {
	db.score.create({
		"UserId": req.user.id,
		"username": req.user.username,
		"points": req.body.score
	}).then(function(data){
		res.end();
		console.log("score sent");
	});
});

router.get('/score', function (req, res) {
	db.score.findAll().then(function(data){
		res.json({data});
	});
});

module.exports = router;

