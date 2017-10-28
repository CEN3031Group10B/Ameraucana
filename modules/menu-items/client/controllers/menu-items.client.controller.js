'use strict';
angular.module('menu-items').controller('MenuItemsController', ['$scope', '$state', 'MenuItems', '$http',
  function($scope, $state, MenuItems, $http) {
    $scope.getAnalytics = function() {
      $http.get('http://localhost:3000/api/menu-items-analytics').success(function(response) {
        console.log(response);
        $scope.analytics = response;
        console.log($scope.analytics[0].count)
      });


      console.log("asdasd");
    };
  }
]);
