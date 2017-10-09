'use strict';

angular.module('core').controller('LoginController', ['$scope', 'Users',
  function($scope, Users) {
    $scope.email = '';
    $scope.password = '';

    /* Functions to implement */
    $scope.loginUser = function() {
      // Get document with email specified
      // Return error if email doesn't exist
      Users.get($scope.email).then(function(res) {
        console.log("Success");
        console.log(res);
      }, function(err) {
        console.log("Error");
        console.log(err);
      });
      console.log("Email: " + $scope.email);
      console.log("Pass: " + $scope.password);
      // Compare password provided with one saved
      // Return error if passwords don't match

    };
  }
]);
