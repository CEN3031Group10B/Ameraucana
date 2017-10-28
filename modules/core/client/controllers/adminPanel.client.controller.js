'use strict';

angular.module('core').controller('adminPanelController', ['$scope', '$stateParams', '$state', '$http',
  function($scope, $stateParams, $state, $http) {

    // SET INITIAL VARIABLES TO DETERMINE TAB CONTENT TO SHOW
    $scope.analytics = true;
    $scope.menu = false;
    $scope.customers = false;
    $scope.orderHistory = false;
    $scope.loyaltyProgram = false;

    // SET INITIAL VARIABLES TO DETERMINE WHEN TO SHOW MODALS
    $scope.addMenuItem = false;
    $scope.addCategory = false;
    $scope.editMenuItem = false;
    $scope.editCategory = false;
    $scope.deleteMenuItem = false;
    $scope.deleteCategory = false;

    $scope.item = {};

    // TAB CONTENT
    $scope.showAnalytics = function() {
      console.log('ANALYTICS');
      $scope.analytics = true;
      $scope.menu = false;
      $scope.customers = false;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = false;
    };

    $scope.showMenu = function() {
      console.log('MENU');
      $scope.analytics = false;
      $scope.menu = true;
      $scope.customers = false;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = false;

      $http.get('http://localhost:3000/api/menu-items-two').success(function(response) {
        $scope.items = response;
        console.log(response);
      });
    };

    $scope.showCustomers = function() {
      console.log('CUSTOMERS');
      $scope.analytics = false;
      $scope.menu = false;
      $scope.customers = true;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = false;

      $http.get('http://localhost:3000/api/menu-items-analytics').success(function(response) {
        $scope.users = response;
      });
    };

    $scope.showOrderHistory = function() {
      console.log('ORDER HISTORY');
      $scope.analytics = false;
      $scope.menu = false;
      $scope.customers = false;
      $scope.orderHistory = true;
      $scope.loyaltyProgram = false;
    };

    $scope.showLoyaltyProgram = function() {
      console.log('LOYALTY PROGRAM');
      $scope.analytics = false;
      $scope.menu = false;
      $scope.customers = false;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = true;
    };

    // MODALS
    $scope.showAddMenuItem = function() {
      $scope.addMenuItem = true;
    };

    $scope.showEditMenuItem = function() {
      $scope.editMenuItem = true;
    };

    $scope.showDeleteMenuItem = function(item) {
      $scope.deleteMenuItem = true;

      $scope.item = item;
    };

    $scope.hideAddMenuItem = function() {
      $scope.addMenuItem = false;
    };

    $scope.hideEditMenuItem = function() {
      $scope.editMenuItem = false;
    };

    $scope.hideDeleteMenuItem = function() {
      $scope.deleteMenuItem = false;
    };

    $scope.confirmDeleteMenuItem = function(item) {
      console.log(item);

      $http.delete('http://localhost:3000/' + item._id).success(function (response) {
        console.log(response);
      });

      var indexNum = $scope.items.indexOf(item);
      $scope.items.splice(indexNum, 1);

      $scope.deleteMenuItem = false;
    };

  }
]);
