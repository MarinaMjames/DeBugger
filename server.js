// node packages
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');

// imported route files
var htmlRoutes = require('./routes/htmlRoutes.js');
var apiRoutes = require('./routes/apiRoutes.js');
var userRoutes = require('./routes/userRoutes.js');

// imported database models
var models = require('./models');

// set port
var port = process.env.PORT || 8080;

// setup express
var app = express();
// morgan logger
app.use(logger('dev'));
// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// method override
app.use(methodOverride('_method'));
// static folder
app.use(express.static(__dirname + "/public"));
// routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
app.use('/user', userRoutes);

// setup server to sync models and listen
models.sequelize.sync({}).then(function() {  // remove force: true once tables are setup
	app.listen(port, function() {
		console.log('Server listening on PORT ' + port);
	});
});