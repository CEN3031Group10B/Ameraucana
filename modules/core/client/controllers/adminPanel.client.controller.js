'use strict';

angular.module('core').controller('adminPanelController', ['$scope', '$state',
  function($scope) {

    // SET INITIAL VARIABLES TO DETERMINE CONTENT TO SHOW
    $scope.analytics = true;
    $scope.menu = false;
    $scope.customers = false;
    $scope.orderHistory = false;
    $scope.loyaltyProgram = false;

    // TOGGLE TAB CONTENT
    $scope.showAnalytics = function() {
      console.log("ANALYTICS");
      $scope.analytics = true;
      $scope.menu = false;
      $scope.customers = false;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = false;
    };

    $scope.showMenu = function() {
      console.log("MENU");
      $scope.analytics = false;
      $scope.menu = true;
      $scope.customers = false;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = false;
    };

    $scope.showCustomers = function() {
      console.log("CUSTOMERS");
      $scope.analytics = false;
      $scope.menu = false;
      $scope.customers = true;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = false;
    };

    $scope.showOrderHistory = function() {
      console.log("ORDER HISTORY");
      $scope.analytics = false;
      $scope.menu = false;
      $scope.customers = false;
      $scope.orderHistory = true;
      $scope.loyaltyProgram = false;
    };

    $scope.showLoyaltyProgram = function() {
      console.log("LOYALTY PROGRAM");
      $scope.analytics = false;
      $scope.menu = false;
      $scope.customers = false;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = true;
    };
  }
]);
