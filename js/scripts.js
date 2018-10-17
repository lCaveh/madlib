$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var adjective1Input = $("input#adjective1").val();
    var hobbie1Input = $("input#hobbie1").val();
    var hobbie2Input= $("input#hobbie2").val();
    var hobbie3Input = $("input#hobbie3").val();
    var foodInput = $("input#food").val();
    var adjective2Input = $("input#adjective2").val();

    $(".adjective1").text(adjective1Input);
    $(".hobbie1").text(hobbie1Input);
    $(".hobbie2").text(hobbie2Input);
    $(".hobbie3").text(hobbie3Input);
    $(".food").text(foodInput);
    $(".adjective2").text(adjective2Input);

    $("#story").show();

    event.preventDefault();
  });
});
