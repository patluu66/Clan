//api routes
//pull in our DB Model here...
// var db = require("../models/index.js");



module.exports = function(app) {

  /*
      Start a new thread
      Create a message on the messge board
   */
  app.get("/api/newThread/", function(req, res) {
    //submit thread data to db
    //userID, Thread Title, Thread body
    // db.newThread(userId, title, body).then(function(results) {
    //   res.json(results);
    // });
  });

  /*

      Post a response to a thread (sub-comment)
      TODO coordinate input with DB filed requirements

   */
  app.get("/api/respondToThread", function(req, res) {

    //submit a response to the thread
    // db.postResponse(thread_id, user_id, body).then(function(results) {
    //   //return results
    //   res.json(results);
    // });

  });

  /*
    Post an event
    Link to this API call from events page?

   */
  app.get("/api/postEvent", function(req, res) {

    //submit a response to the thread
    // db.postEvent( user_id, time, body).then(function(results) {
    //   //return results
    //   res.json(results);
    // });

  });

};
