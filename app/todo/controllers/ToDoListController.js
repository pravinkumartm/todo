(function() {
  'use strict';

  /**
   * @ngdoc todoApp
   * @name ToDoListController
   * @module todoApp
   * @author Pravin Kumar T
   */
  angular
    .module('todoApp')
    .controller('ToDoListController', ToDoListController);

  ToDoListController.$inject = [
    '$scope', 
    'UtilService', 
    'ToDoListService'
  ];

  function ToDoListController($scope, UtilService, ToDoListService) {
    var vm = this;
    
    vm.init = function() {
      vm.selectedList = {};
      vm.listItems = ToDoListService.listItems;
      vm.staticListId = vm.listItems.length;
    }();

    vm.showDialog = function(ev, listId, cardId) {
      vm.selectedList = getListById(listId);
      if(cardId) {
        vm.selectedCard = getCardById(vm.selectedList.cards, cardId);
      }
      showDialog();
    };

    function getListById(listId) {
      return _.filter(vm.listItems, function(item) {
        return item.listId === listId;
      })[0];
    }

    function getCardById(cards, cardId) {
      return _.filter(cards, function(card) {
        return card.cardId === cardId;
      })[0];
    }

    function showDialog() {
      $('#card').modal('show');
    }

    function resetAll() {
      $scope.selectedList ={};
      $scope.selectedCard ={};
      vm.selectedList = {};
      vm.selectedCard ={};
    }

    vm.updateCard = function() {
      var cardObj = vm.selectedCard;
      vm.listItems.map(function(list) {
        if(list.listId === vm.selectedList.listId) {
          if (vm.selectedCard.cardId) {
            list.cards.map(function(card) {
              if(card.cardId === vm.selectedCard.cardId) {
                card.title = cardObj.title;
                card.description = cardObj.description;
                if ($scope.comment) {
                  var commentObj = {
                    commentId: UtilService.getRandomeId(),
                    title: $scope.comment,
                    created_at: new Date()
                  }
                  card.comments.push(commentObj) 
                }
              }
            }); 
          } else {
            vm.addCardToList(list.listId);
          }
        }
      });
      resetAll();
    };

    vm.deleteCard = function(listId, cardId) {
      vm.listItems.map(function(list) {
        if(list.listId === listId) {
          var removeCardIndex;
          _.each(list.cards, function(card, index) {
            if(card.cardId === cardId) {
              removeCardIndex = index;
            }
          });
          list.cards.splice(removeCardIndex, 1);
        }
      });
      resetAll();
    }

    vm.addCardToList = function(listId) {
      var cardObj = vm.selectedCard;
      cardObj.cardId = UtilService.getRandomeId();
      if ($scope.comment) {
        var commentObj = {
          commentId: UtilService.getRandomeId(),
          title: $scope.comment,
          created_at: new Date()
        }
        cardObj.comments.push(commentObj) 
      }
      vm.listItems.map(function(list) {
        if(list.listId === listId) {
          list.cards.push(cardObj);
        }
      });
    };

    vm.addList = function() {
      vm.staticListId = vm.staticListId  + 1;
      var listId = vm.staticListId;
      var title = 'List '+ listId;
      var listObj = {
          listId: 'list_id_'+ listId,
          title: title,
          cards: []
      }
      vm.listItems.push(listObj);
    };

    vm.deleteList = function(listId) {
      var removeIndex;
      _.each(vm.listItems, function(list, index) {
        if(list.listId === listId) {
          removeIndex = index;
        }
      });
      vm.listItems.splice(removeIndex, 1);

      if(vm.listItems.length <= 0) {
        vm.staticListId = 0;
      }
    };

  }

}());
