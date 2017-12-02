
var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  res.redirect("/posts");
});

router.get("/posts", function(req, res) {
  db.Thread.findAll({  include:{model: db.Response} })

  .then(function(dbThread) {
    var hbsObject = {
      thread: dbThread
    };
      console.log("data dump");
      console.log(dbThread);
    return res.render("index", hbsObject);
  });
});



module.exports = router;
