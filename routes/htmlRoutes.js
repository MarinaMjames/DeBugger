// node packages
var express = require('express');

// setup router
var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile('../public/index.html');
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