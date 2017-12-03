


function replyToThread(e) {

  e.preventDefault();

  let target = e.target;
  let id = target.id;

  console.log("Clicked on id: " + id);
  // console.log(target);


  //todo
  //-show modal with thread id passed on

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
