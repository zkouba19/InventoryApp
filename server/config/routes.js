var UserController = require('./../controllers/userController.js');
var VendorController = require('./../controllers/vendorController.js');
var OrderController = require('./../controllers/orderController.js');
var ProductController = require('./../controllers/productController.js');
var CategoryController = require('./../controllers/categoryController.js');
var session = require('cookie-session');
require('dotenv').load();
var secretKey = process.env.SECRET_KEY;
module.exports = function(app){

	// verifying that we are getting the same user
	// and that they are logged in before running 
	// any functions on the backend.

	function loginRequired(req, res, next){
		if(!req.session.userID){
			console.log('no session created')
			return
		} else {
			next();
		}
	}

	function ensureCorrectUser(req, res, next){
		if(req.params.userID !== req.session.userID){
			return;
		} else {
			next();
		}
	}
	// end of check session functions
////////////////////////////////////////////////////////
//////////////////////// routes ///////////////////////
	app.use(session({
		secret: "secretKey"
	}))

	app.post('/register', function(req, res){
		console.log('made it to server /register');
		UserController.register(req, res);
	});

	app.post('/login', function(req, res){
		console.log('made it to server /login');
		UserController.login(req, res);
	});

	app.get('/logout', function(req, res){
		console.log('made it to logout route')
		ProjectController.logout(req, res);
		console.log('this is session after clearing', req.session)
	})

	app.get('/user', loginRequired, function(req, res){
		console.log("made it to /user route in server", req.session)
		UserController.index(req, res);
	})


}