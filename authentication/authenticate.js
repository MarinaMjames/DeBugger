var jwt = require('jsonwebtoken');
var config = require('./config.js');

module.exports = function(req, res, next) {
	var authHeader = req.headers['authorization'];
	var token;

	if (authHeader) {
		token = authHeader.split(' ')[1];
	}

	if (token) {
		jwt.verify(token, config.jwtSecret, function(err, decode) {
			if (err) {
				res.json({ error: 'Failed to authenticate.' });
			} else {
				req.username = decode.username;
				next();
			}
		});
	} else {
		res.json({ error: 'No token provided.' })
	}
}