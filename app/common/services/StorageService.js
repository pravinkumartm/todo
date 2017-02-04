(function() {
    'use strict';

    /**
     * @ngdoc Service
     * @name StorageService
     * @module todoApp
     * @requires $window
     * @description
     * The Storage service which handle browser storage section.
     */
    angular
    .module('todoApp')
    .service('StorageService', StorageService);

    StorageService.$inject = [ 
        '$window'
    ];

    function StorageService($window) {
        var _self = this, webStorage, 
            // You could change web storage type localStorage or sessionStorage
            storageType = 'sessionStorage';

        webStorage = $window[storageType];

        _self.setWebStorage = function() {
            webStorage = $window[storageType];
        };

        /**
         * @name setItem
         * @description
         * To add key value to the storage.
         *
         * @param key {String} - Key to be stored.
         * @param value {String} - Value to be stored against given Key.
         * @param type {String} - Type of the storage.
         */
        _self.setItem = function(key, value) {
            webStorage.setItem(key, value);
        }

        /**
         * @name getItem
         * @description
         * To get the value from the storage for the given key.
         *
         * @param key {String} - Key to be stored.
         * @param type {String} - Type of the storage.
         * 
         * @return value {String} - Value obtained against the given Key.
         */
        _self.getItem = function(key) {
            return webStorage.getItem(key);
        }

        /**
         * @name removeItem
         * @description
         * To remove key value from the storage for the given key.
         *
         * @param key {String} - Key to be stored.
         * @param type {String} - Type of the storage.
         */
        _self.removeItem = function(key) {
            webStorage.removeItem(key);
        }
    }
})();
