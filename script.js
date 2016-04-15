var app = angular.module('myModule', ['ngRoute']);

app.controller('myController', function(){

});

app.config(function($routeProvider) {
  $routeProvider
    .when('/view1',
  {
    controller:'myController',
    templateUrl:'view1.html'
  })
    .when('/view2',
    {
      controller:'myController',
      templateUrl:'view2.html'
  })
    .when('/view3',
  {
    controller:'myController',
    templateUrl:'view3.html'
  })
    .when('/view4',
  {
      controller:'myController',
      templateUrl:'view4.html'
  })
    .otherwise ({redirectTo: '/'});
});
