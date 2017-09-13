// node packages
var express = require('express');
var validator = require('validator');
var bCrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
// import files
var jwtConfig = require('../authentication/config.js');
var db = require('../models');

// setup router
var router = express.Router();

router.post('/sign-up', function(req, res) {
	// validate form
	var validationResult = validateSignupForm(req.body);

	// validation fail
	if (!validationResult.success) {
		return res.json({
			success: false,
			errors: validationResult.errors
		});
	}

	// validation pass
	// encrypt password
	var userPassword = bCrypt.hashSync(req.body.password, bCrypt.genSaltSync(8), null);

	// find username in database
	db.User.findOne({
		where: {
			username: req.body.username
		}
	}).then(function(user) {
		// check if username is taken already, else create user
		if (user) {
			return res.json({
				success: false,
				errors: {
					message:'That username is already taken.'
				}
			});
		} else {
			var userData = {
				username: req.body.username,
				password: userPassword,
				email: req.body.email
			};

			// create new user in database
			db.User.create(userData).then(function(newUser, created) {
				if (!newUser) {
					return res.json({
						success: false,
						errors: {
							message: 'User was not saved to database.'
						}
					});
				}

				if (newUser) {
					return res.json({
						success: true,
						errors: {}
					});
				}
			});
		}
	});
});

router.post('/login', function(req, res) {
	// validate form
	var validationResult = validateLoginForm(req.body);

	// validation fail
	if (!validationResult.success) {
		return res.json({
			success: false,
			errors: validationResult.errors
		});
	}

	// validation pass
	// find user in database
	db.User.findOne({
		where: {
			username: req.body.username
		}
	}).then(function(user) {
		// check if username and password are correct
		if (!user) {
			return res.json({
				success: false,
				errors: {
					message:'Username does not exist.'
				}
			});
		}
		if (!bCrypt.compareSync(req.body.password, user.password)) {
			return res.json({
				success: false,
				errors: {
					message: 'Incorrect password.'
				}
			});
		}
		// create json web token and send to front-end
		var token = jwt.sign({
			userId: user.id,
			username: user.username
		}, jwtConfig.jwtSecret);
		return res.json({
			success: true,
			token: token
		});
	// catch errors
	}).catch(function(err) {
		console.log('Error: ' + err);
		return res.json({
			success: false,
			errors: {
				message: 'Something went wrong with your login.'
			}
		});
	});
});

module.exports = router;

//function to validate sign up form at /signup
function validateSignupForm(payload) {
	var errors = {};
	var isFormValid = true;

	if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
		isFormValid = false;
		errors.username = 'Please provide a username.';
	}

	if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
		isFormValid = false;
		errors.email = 'Please provide a correct email address.';
	}

	if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
		isFormValid = false;
		errors.password = 'Password must have at least 8 characters.';
	}

	if (!payload || typeof payload.confirmPassword !== 'string' || !validator.equals(payload.password, payload.confirmPassword)) {
		isFormValid = false;
		errors.confirmPassword = 'Passwords do not match.';
	}

	if (!isFormValid) {
		errors.message = 'Check the form for errors.';
	}

	// return outcome of validation check
	return {
		success: isFormValid,
		errors
	};
}

//function to validate login form at /login
function validateLoginForm(payload) {
	var errors = {};
	var isFormValid = true;

	if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
		isFormValid = false;
		errors.username = 'Please provide a username.';
	}

	if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
		isFormValid = false;
		errors.password = 'Please provide a password.';
	}

	if (!isFormValid) {
		errors.message = 'Check the form for errors.';
	}

	// return outcome of validation check
	return {
		success: isFormValid,
		errors
	};
}