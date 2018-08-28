var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var firebase = require("firebase"); 


var app = express();

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
