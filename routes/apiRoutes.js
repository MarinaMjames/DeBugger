// node packages
var express = require('express');
// import files
var authenticate = require('../authentication/authenticate.js');
var db = require('../models');

// setup router
var router = express.Router();

router.post('/score/new', authenticate, function (req, res) {
	db.score.findOne({ where: {
		UserId: req.user.id
	}}).then(function(result) {
		if (!result) {
			db.score.create({
				"UserId": req.user.id,
				"username": req.user.username,
				"points": req.body.score
			});
		} else if (result.points < req.body.score) {
			result.update({ "points": req.body.score });
		}
		res.end();
	});
});

router.get('/score', function (req, res) {
	db.score.findAll({ order: [['points', 'DESC']]}).then(function(data){
		res.json({data});
	});
});

module.exports = router;

