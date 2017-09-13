
// import files
var authenticate = require('../authentication/authenticate.js');

// setup router
var router = express.Router();

var db = require('../models');
// setup router
var router = express.Router();

router.get('/path', function(req, res) {
	console.log("path works");
});

router.post('/score/new', function (req, res) {
	console.log(req.body.score);
	db.score.create({
		"points": req.body.score
	}).then(function(data){
		console.log("score sent");
	});
});


router.get('/path', authenticate, function(req, res) {
	// use 'authenticate' to authenticate user apon request
	// user id and username will be in req.user.(id or username) if succesfully authenticated.
	res.json({ success: true, username: req.username });
});

module.exports = router;

