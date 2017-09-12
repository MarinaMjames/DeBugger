// node packages
var express = require('express');
var passport = require('passport');
var validator = require('validator');

// setup router
var router = express.Router();

router.post('/sign-up', function(req, res) {
	var validationResult = validateSignupForm(req.body);
	if (!validationResult.success) {
		console.log(validationResult);
		return res.json({
			success: false,
			message: validationResult.message,
			errors: validationResult.errors
		});
	}
	return res.end();
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
	return res.end();
});

router.get('/logout', function(req, res) {
	req.session.destroy(function(err) {
		res.redirect('/');
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

	if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
		isFormValid = false;
		errors.password = 'Password must have at least 8 characters.';
	}

	if (!payload || typeof payload.confirmPassword !== 'string' || payload.confirmPassword !== payload.password) {
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

	if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
		isFormValid = false;
		errors.password = 'Password must have at least 8 characters.';
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