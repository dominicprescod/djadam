$(function(){
  $('#fullpage').fullpage({
    anchors: ['home', 'about'],
    scrollOverflow: true
  });
  
  $('header').css('display', 'none');

  var checkWindow = function(){
    if(window.location.href.indexOf("#home") >= 0) {
      setTimeout(function(){
      $('header').css('display', 'none');
    }, 500);
    } else {
      setTimeout(function(){
      $('header').css('display', 'block');
    }, 500);
    }

  };

  $(window).on('hashchange', function(e){
    checkWindow();
  });



});
