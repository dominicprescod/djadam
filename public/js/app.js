var app = angular.module('djAdam', ["ngRoute"]);


app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
  $locationProvider.html5Mode({enabled:true});

  $routeProvider.when('/',{
    templateUrl: "partials/events.html",
    controller: "eventsController",
    controllerAs: "events"
  });

}]);

app.controller('eventsController', ["$http", "$location", '$routeParams', function($http, $location, $routeParams){
  var controller = this;
  this.all = null;
  $http({
    method: "GET",
    url: '/getevents'
  }).then(function(response){
    // console.log(response.data);
    controller.all = response.data;
  });

}]);
