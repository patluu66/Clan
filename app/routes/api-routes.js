// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Chirp = require("../models/pets.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // res.json(req);

    // the .then function
    Chirp.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.send(results);
      // res.json(results);
    });

  });

  app.get("/pets", function(req, res) {
    // res.send("hello world");
    Chirp.findAll({}).then(function(results) {
      res.send(results);
    });
  });




  // app.get("/pets", function(req, res) {
  //   // res.send("hello world");
  //   // Chirp.findAll({}).then(function(results) {
  //   //   res.json(results);
  //   // });

  //   Chirp.findOne({ where: {id: '1'} }).then(project => {
  //     // project will be the first entry of the Projects table with the title 'aProject' || null

  //     res.json(project);

  //   })
  // });




  // Add a chirp
  app.post("/api/new", function(req, res) {

    // res.json(req);
    // console.log("Chirp Data:");
    // console.log("---------------------------");
    // console.log(req.body);
    // console.log("---------------------------");

    Chirp.create({
      name: req.body.name,
      image: req.body.image,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });


  // app.get("/api/new", function(req, res) {
  //   Chirp.findAll({}).then(function(results) {
  //     // results are available to us inside the .then
  //     res.send(results);
  //     // res.json(results);
  //   });
  //   // res.send("hello world");
  
  // });



};




