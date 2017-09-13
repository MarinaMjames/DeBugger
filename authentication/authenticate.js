// node packages
var jwt = require('jsonwebtoken');
// import files
var config = require('./config.js');

// function to authenticate web tokens sent in request header
module.exports = function(req, res, next) {
	var authHeader = req.headers['authorization'];
	var token;

	// if 'authorization' header exists
	if (authHeader) {
		// get token from header
		token = authHeader.split(' ')[1];
	}

	// if token exists
	if (token) {
		jwt.verify(token, config.jwtSecret, function(err, decode) {
			// if token verification fails
			if (err) {
				res.json({
					success: false,
					error: 'Failed to authenticate.'
				});
			} else {
			// if token verification passes, add id and username from token to req and proceed to next function
				req.user = {
					id: decode.userId,
					username: decode.username
				};
				next();
			}
		});
	} else {
	// if token does not exist
		res.json({
			success: false,
			error: 'No token provided.'
		});
	}
}