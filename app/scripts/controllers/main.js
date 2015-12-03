'use strict';

/**
 * @ngdoc function
 * @name angularToDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularToDoApp
 */
angular.module('angularToDoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'item 4'];
    $scope.addToDo = function() {
        // To work on..
      // if ($scope.textArea === " ") {
      //   alert('You cannot add an empty to do');
      //   return false;
      // } else {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      // }

    };
        $scope.removeToDo = function(index) {
          $scope.todos.splice(index, 1);
        }
  });
