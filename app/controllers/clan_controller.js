
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
      // console.log(dbThread);
      console.log(dbThread[0].Responses);
    return res.render("index", hbsObject);
  });
});


/**
 * TODO user section
 * 
 *
 */
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


/**
 * Post a response
 *
 */
router.post("/api/response", function(req, res) {

  console.log("Posted to respnse");
  let threadId = req.body.id;
  let text = req.body.response;

  console.log("Thread id: " + threadId + ", response: " + text);

  //do sequelize here


});//end post response


/**
 * Delete a Thread or response
 *
 */
router.post("/api/delete/:postType?", function(req, res) {

  let postType = req.params.postType;
  console.log("Posted to respnse");
  let postId = req.body.id;

  console.log("Delete: " + postType + " with id: " + postId);

  //do sequelize here


});//end delete thread


module.exports = router;
