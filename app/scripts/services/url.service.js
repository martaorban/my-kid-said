(function () {
  'use strict';

  angular
      .module('mksApp')
      .service('UrlService', UrlService);

  UrlService.$inject = ['$http', '$location'];

  function UrlService($http, $location) {

    service.filesystemFavorites = function () {
      return baseUrl + 'filesystem-favorites';
    };

    return service;

  };
})();