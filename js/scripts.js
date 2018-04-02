function toDoList(day, morningTask, lateMorningTask, afternoonTask, lateAfternoonTask, eveningTask){
  this.day = day;
  this.morningTask = morningTask;
  this.lateMorningTask = lateMorningTask;
  this.afternoonTask = afternoonTask;
  this.lateAfternoonTask = lateAfternoonTask;
  this.eveningTask = eveningTask;
}

$(document).ready(function() {
  $("form#toDoForm").submit(function(event) {
    event.preventDefault();

    var inputtedDay = $("input#day").val();
    var inputtedMorning = $("input#morning").val();
    var inputtedLateMorning = $("input#lateMorning").val();
    var inputtedAfternoon = $("input#afternoon").val();
    var inputtedLateAfternoon = $("input#lateAfternoon").val();
    var inputtedEvening = $("input#eveningt").val();
    var newTaskList = new toDoList(inputtedDay, inputtedMorning, inputtedLateMorning, inputtedAfternoon, inputtedLateAfternoon, inputtedEvening);

    $("ul").append("<li>" + newTaskList.day + "</li><li>" + newTaskList.morningTask + "</li><li>" + newTaskList.lateMorningTask + "</li><li>" + newTaskList.afternoonTask + "</li><li>" + newTaskList.lateAfternoonTask + "</li><li>" + newTaskList.eveningTask + "</li>")
    $("ul#taskList li").click(function(){
      $(this).remove();
    });
  });
});
