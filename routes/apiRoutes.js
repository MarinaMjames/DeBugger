// node packages
var express = require('express');

// setup router
var router = express.Router();

router.get('/path', function(req, res) {
	
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