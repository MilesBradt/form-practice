
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var userNameInput = $("input#userName").val();
    console.log(userNameInput);
    event.preventDefault();
  });
});
