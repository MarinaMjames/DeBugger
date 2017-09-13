// node packages
var express = require('express');
// import files
var authenticate = require('../authentication/authenticate.js');

// setup router
var router = express.Router();

router.get('/path', authenticate, function(req, res) {
	// use 'authenticate' to authenticate user apon request
	// user id and username will be in req.user.(id or username) if succesfully authenticated.
	res.json({ success: true, username: req.username });
});

module.exports = router;