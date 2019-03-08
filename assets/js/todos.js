/*
// Check off specific todos by clicking using
// css
$("li").click(function(){
  //if the text is black, apply gray and line through
  if($(this).css("color") === "rgb(0, 0, 0)"){  
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
    });}
  //if the text is not black, apply black and no line through
  else{
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
  }
});
*/

// check off specific todos by clicking using toggleClass
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Delete a To Do with fade out effect
$("ul").on("click", "span", function(event){
  let conf = confirm("Are you sure you want to delete this ToDo?");
  if(conf == true){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
      });
  }
  event.stopPropagation();
});

// Input a new To Do
$("input[type='text']").on("keypress", function(event){
  if(event.which === 13){
    // grab the input text
    let todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").prepend("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});