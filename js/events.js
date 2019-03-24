$(document).ready(function() {

});


function getIt() {
  $('p').on("click", function(){
  alert('Hey!');
  });
}

function frameIt() {
  $('#tasty').on('load', function(){
});
}


Define a function frameIt that does not accept a parameter. The function should bind the load event that adds the class tasty to the image to add a red frame to the image.







function pressIt() {
  $(input).on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
}


function submitIt() {
  
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
}

  