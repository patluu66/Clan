
var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  res.redirect("/posts");
});

router.get("/posts", function(req, res) {
  db.Thread.findAll({  include:[ db.Response] })

  .then(function(dbThread) {
    var hbsObject = {
      thread: dbThread
    };
      console.log("data dump");
      console.log(dbThread);
    return res.render("index", hbsObject);
  });
});

router.get("/users", function(req, res) {
  db.Person.findAll({  })

  .then(function(data) {
    var dataObj = {
      user: data
    };
      console.log("data dump");
      console.log(data);
    return res.render("users", dataObj);
  });
});


router.post("/api/response", function(req, res) {

  console.log("Posted to respnse");
  let threadId = req.body.id;
  let text = req.body.response;

  console.log("Thread id: " + threadId + ", response: " + text);





});//end post response



module.exports = router;
