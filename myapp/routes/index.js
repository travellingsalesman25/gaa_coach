var express = require('express');
var router = express.Router();
//TO DO INSTALL MYSQL
var mysql = require('mysql');
//hash passwords
var passwordHash = require('password-hash');

var con = mysql.createConnection({
	host: "sql2.freemysqlhosting.net",
	user: "sql2251702",
	password: "yJ9*jY6!",
	database: "sql2251702"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
/*router.get('/drills', function(req, res, next) {
	res.render('drills', { title: 'Express' });
});*/

/* GET register page. */
router.get('/register', function(req, res, next) {
	res.render('register_1', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
	res.render('login_1', { title: 'Express' });
});




/* Handle register user form submit */
router.post('/register_user', function(req, res, next) {
	
			var username = req.body.username;
			var password = req.body.pass;
			var email = req.body.email;
			
			

		/* var hashedPassword = passwordHash.generate(password);

		console.log(hashedPassword);
			
	con.connect(function(err) {
		if (err) throw err;
			console.log("Connected!");
			var sql = "INSERT INTO registered_users (user_name, user_pass,user_email,created_date) VALUES ?";
			
			var values = [
				[username,hashedPassword,email,new Date()]
			];
			
			con.query(sql,[values], function (err, result) {
			if (err) throw err;
				console.log("Number of records inserted: " + result.affectedRows);
			});
}		);
	
	
	console.log(username)
	

  res.render('register', { title: 'Express' }); */
});


router.post('/login_user', function(req, res, next) {
	console.log("in the login_user route");
	
	var login_username = req.body.username;
	var login_password = req.body.pass;
	
	console.log(passwordHash.generate(login_password))
	
	hashedPassword="sha1$24682b19$1$a063d0890a47325859a9c8dfb740fb4dfb10857b"
	console.log(passwordHash.verify(login_password, hashedPassword));
	
	
	res.render('login', { title: 'Express', logged_in: false });
});



module.exports = router;
