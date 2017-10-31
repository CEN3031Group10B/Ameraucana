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
      $scope.analytics = true;
      $scope.menu = false;
      $scope.customers = false;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = false;
    };

    $scope.showMenu = function() {
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
      $scope.analytics = false;
      $scope.menu = false;
      $scope.customers = true;
      $scope.orderHistory = false;
      $scope.loyaltyProgram = false;

      // CREATE NEW ROUTES FOR CUSTOMERS AND USERS - TODO
      // $http.get('http://localhost:3000/api/allUsers').success(function(response) {
      //   console.log("SHOW CUSTOMERS: ");
      //   console.log(response);
      //   $scope.users = response;
      // });
    };

    $scope.showOrderHistory = function() {
      $scope.analytics = false;
      $scope.menu = false;
      $scope.customers = false;
      $scope.orderHistory = true;
      $scope.loyaltyProgram = false;
    };

    $scope.showLoyaltyProgram = function() {
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

    $scope.showEditMenuItem = function(item) {
      $scope.editMenuItem = true;

      $scope.item = item;
      console.log(item);
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

      $http.delete('http://localhost:3000/' + item._id).success(function (response) {
        console.log(response);
      });

      var indexNum = $scope.items.indexOf(item);
      $scope.items.splice(indexNum, 1);

      $scope.deleteMenuItem = false;
    };

    $scope.confirmCreateMenuItem = function(item) {

      var newMenuItem = {
        name: item.name,
        description: item.description,
        price:  item.price,
        category: item.category,
        show: true
      };

      $http.post('http://localhost:3000/api/menu-item', newMenuItem).success(function(response) {
        console.log(response);
      });

      $scope.items.push(newMenuItem);
    };

    $scope.confirmEditMenuItem = function(item) {

      var menuItem = {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        show: true
      };

      console.log("ITEM - LINE 146");
      console.log(item);

      $http.put('http://localhost:3000/' + item._id, item).success(function(response) {
        console.log(response);
      });

    };

  }
]);
