$(function(){
  $('#fullpage').fullpage({
    anchors: ['home', 'about', 'clients', 'sounds', 'video', 'gallery'],
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

  var userFeed = new Instafeed({
    get: 'user',
    userId: '205548160',
    accessToken: '214864071.1677ed0.c1115c3548294daa8b0adfdeb1976410',
    standard_resolution: '612x612'
  });
  userFeed.run();

});
