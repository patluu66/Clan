
var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  res.redirect("/clan");
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


router.get("/users", function(req, res) {
  db.Thread.findAll({
  })
  .then(function(dbThread) {
    return res.render("users", dbThread);
    // var hbsObject = {
    //   burger: dbBurger
    // };
    // return res.render("index", hbsObject);
  });
});

router.get("/signIn", function(req, res) {
  db.Thread.findAll({
  })
  .then(function(dbThread) {
    return res.render("signIn", dbThread);
    // var hbsObject = {
    //   burger: dbBurger
    // };
    // return res.render("index", hbsObject);
  });
});


router.get("/clan", function(req, res) {
  db.Thread.findAll({ include:[ db.Response] })

  .then(function(dbThread) {
    var hbsObject = {
      thread: dbThread
    };
      console.log("data dump");
      // console.log(dbThread[0]);
    return res.render("index", hbsObject);
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


});


router.post("/clan/post", function(req, res) {
  // db.Thread.findAll({ include:[ db.Response] })

  if(req.body.response) {
    
    db.Response.create({
      response: req.body.response,
      createAt: "NOW()",
      updateAt: "NOW()",
      PersonId: 1,
      ThreadId: req.body.thread_id
    })

    .then(function(dbResponse) {
      res.redirect("/");
    });
  }
});




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




