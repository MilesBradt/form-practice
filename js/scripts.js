
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var userNameInput = $("input#userName").val();
    $("#name").text(userNameInput);
    $("#postcard").show(600);
    console.log(userNameInput);
    event.preventDefault();
  });
});
