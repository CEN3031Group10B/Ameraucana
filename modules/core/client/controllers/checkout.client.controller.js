'use strict';

angular.module('core').controller('CheckoutController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

  }
]);
