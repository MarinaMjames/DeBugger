// node packages
var express = require('express');
var passport = require('passport');

// setup router
var router = express.Router();

router.route('/sign-up')
	.get(function(req, res) {
		res.sendFile();
	})
	.post(passport.authenticate('local-signup', {
		successRedirect: true,
		failureRedirect: false
	})/*function(req, res) {
		console.log(req.body);
		res.send(req.body);
	}*/);

router.route('/login')
	.get(function(req, res) {
		res.sendFile();
	})
	.post(passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/user/login'
	}));

router.get('/logout', function(req, res) {
	req.session.destroy(function(err) {
		res.redirect('/');
	});
});

module.exports = router;