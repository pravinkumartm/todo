(function() {

  'use strict';

  angular
    .module('todoApp')
    .service('UtilService', UtilService);

  UtilService.$inject = ['$window'];

  function UtilService($window) {

    this.getRandomeId = function() {
      return Math.random().toString(36).substring(7);
    };

    this.encodeString = function(str) {
        return $window.btoa(str);
    };

    this.decodeString = function(str) {
        return $window.atob(str);
    };
  }

}());
