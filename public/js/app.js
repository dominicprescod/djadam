var app = angular.module('djAdam', []);
console.log('app');


app.controller('bodyController', ["$http", function($http){
  var controller = this;
  this.all = null;
  this.currentView = 1;

  this.view = function(num){
    controller.currentView = num;
  };


  // $http({
  //   method: "GET",
  //   url: '/getevents'
  // }).then(function(response){
  //   // console.log(response.data);
  //   controller.all = response.data;
  // });

}]);


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
