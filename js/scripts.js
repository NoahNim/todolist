var taskNumber=0;



$(document).ready(function() {
  $("form#toDoForm").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#newTask").val();

    $("ul#taskList").append("<li id='task"+taskNumber+"'>" + inputtedTask +"</li>");
  });
});
