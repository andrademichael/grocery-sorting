
$(document).ready(function(){
  $("form#inputList").submit(function(event){
    event.preventDefault();
    var input1 = $("input#item1").val();
    var input2 = $("input#item2").val();
    var input3 = $("input#item3").val();
    var input4 = $("input#item4").val();
    var input5 = $("input#item5").val();

    var items = [input1, input2, input3, input4, input5];

    $("#inputList").hide();
    // $("#outputList").show();
    items.sort();
    for
    (var i = 1; i < 5; i++) {
      $(items[i].toUpperCase);
}
    for
    (var i = 1; i < 5; i++) {
      $("ul").append("<li>" + items[i] + "</li>");
}
    console.log(items);
  });
});
