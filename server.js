
//express
var express = require("express");
//body parser
var bodyParser = require("body-parser");

//fav icon
var favicon = require('serve-favicon');


var path = require("path");

//do init
var app = express();
//port for local use and heroku compliant
var PORT = process.env.PORT || 8080;


//set body parser,etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//favorite icon
app.use(favicon(path.join(__dirname, 'app/public/assets/images/favicon.ico')));

// Set Handlebars.
var exphbs = require("express-handlebars");


//set views to our custom location
app.set('views', path.join(__dirname, "app/views/"));

//push handlebars - use custom views location
 app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir: "app/views/layouts/"}));
 //set as view engine
app.set("view engine", "handlebars");


// Static directory
app.use(express.static("app/public"));


//setup the routes - controller
require("./app/controllers/clan_controller.js");

// bring in the routes
var routes = require('./controllers/burgers_controller.js');

// connect the routes
app.use('/', routes);


//run up the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
