$(document).ready(function(){
  
  //$('header').delay(2000).fadeIn(1800);

  $('#landing').height($(window).height());

  $(".question").on("click", function() {
  	$(this).nextAll('.answer').first().toggle();
  });
});
