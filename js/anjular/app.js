var main_app = angular.module('app',['ngRoute']);

main_app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'anjscontroller',
      }).
      when('/donor_tile', {
        templateUrl: 'anjscontroller/donor_tile',
      }).
      otherwise({
        redirectTo: 'anjscontroller'
      });
  }]);