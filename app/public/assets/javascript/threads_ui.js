

/**
 * Reply to a thread
 *
 */
function replyToThread(event) {

  event.preventDefault();

  let target = event.target;
  let id = target.id;

  console.log("Clicked on id: " + id);
  // console.log(target);


  //todo
  //-show modal with thread id passed on
  //that should be another function
  //called from the modal buttons

  let bObj = $("#" + id);
  let threadId = bObj.data("id");

  console.log("Thread id: " + threadId);

  //test string to send
  let responseStr = "This is a response to a post.";

  let rObj = {
    id : threadId,
    response: responseStr
  };

  //post the data
  $.ajax({
    type: 'POST',
    url: '/api/response',
    data: JSON.stringify(rObj),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
  });

}//end reply to thread



/**
 *   Delete a Thread or response
 */
function deletePosting(event) {
  event.preventDefault();

  let target = event.target;
  let id = target.id;

  let bObj = $("#" + id);
  let postId = bObj.data("id");
  let postType = bObj.data("post-type");

  console.log("dom target id = " + id + ", id = " + postId + ", post type = " + postType);

  //construct target
  let apiUrl = "api/delete/" + postType;

    let delObj = {
      id : postId
    };

  //post the data
  $.ajax({
    type: 'POST',
    url: apiUrl,
    data: JSON.stringify(delObj),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
  });



}
