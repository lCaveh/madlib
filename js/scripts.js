$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["adjective1","hobbie1","hobbie2","hobbie3","food","adjective2"];
    blanks.forEach(function (blank) {
      var userInput = $("input#"+blank).val();
      $("."+blank).text(userInput);
    });
    $("#story").show();

    event.preventDefault();
  });
});
