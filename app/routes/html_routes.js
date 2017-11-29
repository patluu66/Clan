

var path = require("path");


//routes to export
module.exports = function(app) {


  /*

    Main Landing page
    TODO - check for Organizer or for Member Login (invited)
          Login may be modal

   */
  app.get("/", function(req, res) {

    //test handle bars with some random data....
    var hbObj = {
      posts : [ {id:1,title: "My First Post", body: "Hey this is my post"},
                {id:2, title: "Another Post", body: "I've got something more to add"},
                {id:2, title: "And finally...", body: "Last but not least, a random thought..."}]
    }
    // res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render("index", hbObj);
  });

  /*
    Route for new user signup
    TODO discuss mechanics, see above
   */
  app.get("/signup", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/signup.html"));

  });

  /*
      User Bio page
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

  /*
        Display the crime map page

   */
  app.get("/crime", function(req, res) {

    //show all crime in area
    res.sendFile(path.join(__dirname, "../public/crime.html"));
  });

};
