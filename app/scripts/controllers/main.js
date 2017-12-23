'use strict';

function MainCtrl ($scope, $log, $interval, dataService) {

  // $log.log, warn, error
  $scope.seconds = 0 
  $scope.counter = function(){
    $scope.seconds++
    $log.log($scope.seconds + ' seconds have passed.')
  }

  $interval($scope.counter, 1000, 10)

  dataService.getTodos(function(response){
    var todos = response.data.todos;
    $scope.todos =  todos;
  });

  $scope.addTodo = function() {
    $scope.todos.unshift({name: "This is a new todo.",
                      completed: false});
  };

}

module.exports = MainCtrl;
