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

var userFeed = new Instafeed({
  get: 'user',
  userId: '205548160',
  accessToken: '214864071.1677ed0.c1115c3548294daa8b0adfdeb1976410',
  standard_resolution: '612x612'
});
userFeed.run();
