/* global moment */

// When user clicks add-btn
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // console.log("hello");

  // Make a newChirp object
  var newChirp = {
    name: $("#author").val().trim(),
    image: $("#image").val().trim(),
    body: $("#chirp-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };
  // console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
  // console.log(newChirp);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newChirp)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.name + " subject: </p>");
      row.append("<p>" + newChirp.image + "</p>");
      // row.append("<img src=" + newChirp.image + ">");
      row.append("<p>" + newChirp.body + "</p>");
      row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#image").val("");
  $("#chirp-box").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  console.log(data);

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].name + " subject.. </p>");
      row.append("<p>" + data[i].image + "</p>");
      // row.append('<img src=' + data[i].image + 'alt="image">');
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    }

  }

});
