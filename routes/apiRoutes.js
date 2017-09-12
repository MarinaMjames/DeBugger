// node packages
var express = require('express');
var db = require('../models');
// setup router
var router = express.Router();

router.get('/path', function(req, res) {
	console.log("path works");
});

router.post('/score/new', function (req, res) {
	console.log(req.body.score);
	db.score.create({
		"points": req.body.score
	}).then(function(data){
		console.log("score sent");
	});
});


module.exports = router;

// function to test if user is logged in
// can also use req.isAuthenticated() in an if statement
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}