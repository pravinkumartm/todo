(function() {

  'use strict';

  angular
    .module('todoApp')
    .service('UtilService', UtilService);

  function UtilService() {
    this.getRandomeId = function() {
      return Math.random().toString(36).substring(7);
    };
  }

}());
