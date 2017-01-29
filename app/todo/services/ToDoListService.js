(function() {

  'use strict';

  angular
    .module('todoApp')
    .service('ToDoListService', ToDoListService);

  function ToDoListService() {
    this.listItems = [{
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
  }

}());
