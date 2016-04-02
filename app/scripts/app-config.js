(function () {
  'use strict';

  angular
      .module('mksApp')
      .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'views/dashboard.html',
          controller : 'DashboardController',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
  }
})();