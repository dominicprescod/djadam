$(function(){

$('header h1').click(function(){
  if($('#menu').is(":visible")){
    $('#menu').hide();
    $(this).html('=');
  }else {
    $('#menu').show();
    $(this).html('x');
  }
});







});
