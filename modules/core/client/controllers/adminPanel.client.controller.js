'use strict';

angular.module('core').controller('adminPanelController', ['$scope', '$stateParams', '$state', 'Users', '$http',
  function($scope, $stateParams, $state, Users, $http) {

    console.log("hello world");

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

    // TAB CONTENT
    $scope.showAnalytics = function() {
      console.log('ANALYTICS');
      $http.get('http://localhost:3000/server-error').then(function(results) {
        console.log('WTFFFF');
      });
      $http.get('http://localhost:3000/lol').then(function (results) {
        console.log(results);
      });
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
    };

    $scope.showCustomers = function() {
      console.log('CUSTOMERS');
      $scope.analytics = false;
      $scope.menu = false;
      $scope.customers = true;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = false;
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

    $scope.showAddCategory = function() {
      $scope.addCategory = true;
    };

    $scope.showEditMenuItem = function() {
      $scope.editMenuItem = true;
    };

    $scope.showEditCategory = function() {
      $scope.editCategory = true;
    };

    $scope.showDeleteMenuItem = function() {
      $scope.deleteMenuItem = true;
    };

    $scope.showDeleteCategory = function() {
      $scope.deleteCategory = true;
    };

    $scope.hideAddMenuItem = function() {
      $scope.addMenuItem = false;
    };

    $scope.hideAddCategory = function() {
      $scope.addCategory = false;
    };

    $scope.hideEditMenuItem = function() {
      $scope.editMenuItem = false;
    };

    $scope.hideEditCategory = function() {
      $scope.editCategory = false;
    };

    $scope.hideDeleteMenuItem = function() {
      $scope.deleteMenuItem = false;
    };

    $scope.hideDeleteCategory = function() {
      $scope.deleteCategory = false;
    };

    $scope.find = function() {
      $http.get('http://localhost:3000/api/users').success(function(response) {
        console.log(response);
        $scope.users = response.data;
        console.log(response.data);
      });
    };
  }
]);
