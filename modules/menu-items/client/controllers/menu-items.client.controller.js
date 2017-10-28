'use strict';

angular.module('menu-items').controller('MenuItemsController', ['$scope', '$state', 'MenuItems', '$http',
  function($scope, $state, MenuItems, $http) {
    $scope.getAnalytics = function() {
      console.log("???");
      $http.get('http://localhost:3000/api/menu-items-analytics').success(function(response) {
        console.log(response);
        $scope.analytics = response.data;
        console.log(response.data);
      });
      console.log("asdasd");
    };
  }
]);
