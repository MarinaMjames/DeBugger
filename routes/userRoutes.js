// node packages
var express = require('express');
var validator = require('validator');
var bCrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var jwtConfig = require('../authentication/config.js');

var db = require('../models');

// setup router
var router = express.Router();

router.post('/sign-up', function(req, res) {
	var validationResult = validateSignupForm(req.body);
	if (!validationResult.success) {
		return res.json({
			success: false,
			message: validationResult.message,
			errors: validationResult.errors
		});
	}
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
				message: 'That username is already taken.',
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
						message: 'User was not saved to database.',
					});
				}

				if (newUser) {
					return res.end();
				}
			});
		}
	});
});

router.post('/login', function(req, res) {
	var validationResult = validateLoginForm(req.body);
	if (!validationResult.success) {
		console.log(validationResult);
		return res.json({
			success: false,
			message: validationResult.message,
			errors: validationResult.errors
		});
	}
	// find user in database
	db.User.findOne({
		where: {
			username: req.body.username
		}
	}).then(function(user) {
		// check if user name and password are correct
		if (!user) {
			return res.json({
				success: false,
				message: 'Username does not exist.',
			});
		}

		if (!bCrypt.compareSync(req.body.password, user.password)) {
			return res.json({
				success: false,
				message: 'Incorrect password.',
			});
		}
		var token = jwt.sign({
			username: user.username
		}, jwtConfig.jwtSecret);
		return res.json({ token });

	}).catch(function(err) {
		console.log('Error: ' + err);
		return res.json({
			success: false,
			message: 'Something went wrong with your login..',
		});
	});
});

module.exports = router;

function validateSignupForm(payload) {
	var errors = {};
	var isFormValid = true;
	var message = '';

	if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
		isFormValid = false;
		errors.username = 'Please provide a username.';
	}

	if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
		isFormValid = false;
		errors.email = 'Please provide a correct email address.';
	}

	if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 4) {
		isFormValid = false;
		errors.password = 'Password must have at least 8 characters.';
	}

	if (!payload || typeof payload.confirmPassword !== 'string' || !validator.equals(payload.password, payload.confirmPassword)) {
		isFormValid = false;
		errors.confirmPassword = 'Passwords do not match.';
	}

	if (!isFormValid) {
		message = 'Check the form for errors.';
	}

	return {
		success: isFormValid,
		message,
		errors
	};
}

function validateLoginForm(payload) {
	var errors = {};
	var isFormValid = true;
	var message = '';

	if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
		isFormValid = false;
		errors.username = 'Please provide a username.';
	}

	if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 4) {
		isFormValid = false;
		errors.password = 'Password must have at least 4 characters.';
	}

	if (!isFormValid) {
		message = 'Check the form for errors.';
	}

	return {
		success: isFormValid,
		message,
		errors
	};
}