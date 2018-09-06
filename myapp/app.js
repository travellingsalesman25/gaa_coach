var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var firebase = require("firebase"); 
var session = require('express-session');


var app = express();
app.use(session({secret: 'ssshhhhh'}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded


var config = {
    apiKey: "AIzaSyCdw9lXLXCrd93SSwn4098hN3ihjACnr_Q",
    authDomain: "trainingdrills-5ba69.firebaseapp.com",
    databaseURL: "https://trainingdrills-5ba69.firebaseio.com",
    storageBucket: "trainingdrills-5ba69.appspot.com"
  };
  firebase.initializeApp(config);

  





app.get("/", (req, res) => {
	res.render("index");
});

/*app.get("/drills", (req, res) => {
	res.render("drills");
});*/

app.post('/user_create',function(req,res){
	firebase.auth().createUserWithEmailAndPassword(req.body.userEmail, req.body.userPass).then(function(){
		res.send("user Created");
	})	
	.catch(function(error) {
  		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorMessage)
		return errorMessage
	});

})

app.get('/isAuthenticated',function(req,res){
	firebase.auth().onAuthStateChanged(frebaseUser => {
		//sessionStorage.setItem("email", email);
		
		console.log("HELLO! Welcome " + frebaseUser);
		var successMsg =("You Are Successfully Signed In! Welcome " ); 
		res.send(frebaseUser);
        //window.location = "homepage.html";
    });
});

app.post('/login_user',function(req,res){
	firebase.auth().signInWithEmailAndPassword(req.body.userEmail, req.body.userPass).then(function() {
    // Handle success here
    firebase.auth().onAuthStateChanged(frebaseUser => {
		//sessionStorage.setItem("email", email);
		req.session.loggedIn="true";
		console.log("You Are Successfully Signed In! Welcome " + req.body.userEmail);
		var successMsg =("You Are Successfully Signed In! Welcome " + req.body.userEmail) 
		res.send(successMsg);
        //window.location = "homepage.html";
    });
}, function(error) {
    // Handle Errors here.
    var errorMessage = error.message;
   console.log(errorMessage);
   return errorMessage;
    //document.getElementById("txtPassword").value = "";
});
})

app.post('/create_drill',function(req,res){
	var refDrill = firebase.database().ref("drills/")
	refDrill.push({
		name:req.body.drill_name
	}).then(function(){
		console.log("DB WRITE OK");
	}).catch(function(){
		console.log("FAILED TO WRITE TO DB");
	});
	
	console.log(req.body.drill_name);
	res.end()
})


app.get("/login", (req, res) => {
	res.render("login");
});

module.exports = app;
