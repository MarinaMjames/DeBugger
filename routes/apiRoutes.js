// node packages
var express = require('express');
// import files
var authenticate = require('../authentication/authenticate.js');

// setup router
var router = express.Router();

router.get('/path', authenticate, function(req, res) {
	// use 'authenticate' to authenticate user apon request
	// username will be in req.username is succesfully authenticated.
	res.json({ success: true, username: req.username });
});

module.exports = router;