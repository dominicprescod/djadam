$(function(){
  var $landscape = $('<link rel="stylesheet" href="../css/media/sm-landscape.css" media="screen" title="no title" charset="utf-8">');
  var $portrait = $('<link rel="stylesheet" href="../css/media/sm-portrait.css" media="screen" title="no title" charset="utf-8">');

  var checkSize = function(){
    if( $(window).width() > $(window).height()){
      $('head').append($landscape);
      if($('head').has($portrait)) $portrait.remove();
    } else {
      $('head').append($portrait);
      if($('head').has($landscape)) $landscape.remove();
    }
  };
  checkSize();

  $(window).resize(function(){
    checkSize();
  });
});
