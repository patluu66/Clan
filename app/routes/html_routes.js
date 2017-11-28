

var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {


  /*

    Main Landing page
    TODO - check for Organizer or for Member Login (invited)
          Login may be modal

   */
  app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/index.html"));

  });

  /*
    Route for new user signup
    TODO discuss mechanics, see above
   */
  app.get("/signup", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/signup.html"));

  });

  /*
      User bio page
      TODO - provide page for all user settings

   */
  app.get("/user/:userid", function(req, res) {

    //lookup user id.... serve profile
    res.sendFile(path.join(__dirname, "../public/user.html"));

  });

  /*

    Page for events

   */
  app.get("/events/:roomid", function(req, res) {

    //lookup roomname, show events for room
    res.sendFile(path.join(__dirname, "../public/events.html"));
  });



};
