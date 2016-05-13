var app = angular.module('djAdam', []);
console.log('app')


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
