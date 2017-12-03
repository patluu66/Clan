var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  res.redirect("/posts");
});

router.get("/posts", function(req, res) {
  db.Thread.findAll({})
  .then(function(dbThread) {
    var hbsObject = {
      thread: dbThread
    };
    return res.render("index", hbsObject);
  });
});



module.exports = router;





// var express = require('express');
// var router = express.Router();
// var db = require("./../models");



//main posts page
// router.get("/posts", function(req,res) {
//   db.Threads.findAll({})

//   .then(function(results) {
//     // console.log("find all results");
//     // console.log(results);
//     // res.render("index", results);
//     return res.render("index", results);
//   });

// });




//export the router
// module.exports = router;
