
//express
var express = require("express");
//body parser
var bodyParser = require("body-parser");

//do init
var app = express();
//port for local use and heroku compliant
var PORT = process.env.PORT || 8080;


//set body parser,etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));


//setup the routes - html and api
require("./app/routes/api_routes.js")(app);
require("./app/routes/html_routes.js")(app);

//run up the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
