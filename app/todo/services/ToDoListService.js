(function() {

  'use strict';

  angular
    .module('todoApp')
    .service('ToDoListService', ToDoListService);

  ToDoListService.$inject = [
      'StorageService',
      'UtilService'
  ];

  function ToDoListService(StorageService, UtilService) {

    var _self = this,
      defaultData = [{
            listId: 'list_id_1',
            title: 'List 1',
            cards: [{
            cardId: 'card_id_1',
            title: 'A',
            description: 'Card description',
            comments: [{
                commentId: 'comment_id_1',
                title: 'Comment 1',
                created_at: new Date()
            }, {
                commentId: 'comment_id_2',
                title: 'Comment 2',
                created_at: new Date()
            }, {
                commentId: 'comment_id_3',
                title: 'Comment 3',
                created_at: new Date()
            }]
            }, {
            cardId: 'card_id_2',
            title: 'B',
            description: 'Card description',
            comments: []
            }, {
            cardId: 'card_id_3',
            title: 'C',
            description: 'Card description',
            comments: []
            }]
        }, {
            listId: 'list_id_2',
            title: 'List 2',
            cards: []
        }];

    

    _self.saveAppData = function(appData) {
      StorageService.setItem('todoApp', UtilService.encodeString(JSON.stringify(appData)));
    };

    _self.getAppData = function() {
      var appData = StorageService.getItem('todoApp');
      if (appData) {
        appData = JSON.parse(UtilService.decodeString(appData));
      }
      return appData;
    };

    _self.initializeData = function(cb) {
      var appData = _self.getAppData();
      if(appData) {
        _self.listItems = appData;
      } else {
        _self.listItems = defaultData;
        _self.saveAppData(defaultData);
      }
      cb();
    };
  }

}());
