
var express = require('express');
var router = express.Router();


var Responses = require("../models/responses.js");
var Threads = require("../models/threads.js");



//main posts page
router.get('/posts', function(req,res) {
      Threads.findAll({include:{model: Responses}}).then(function(results) {
        console.log("find all results");
        console.log(results);
        res.render("index", results);
      });

});




//export the router
module.exports = router;
