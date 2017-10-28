'use strict';

// Setting up route
angular.module('menu-items').config(['$stateProvider',
  function ($stateProvider) {
    // Users state routing
    $stateProvider
      .state('analytics', {
        url: '/items-analytics',
        templateUrl: 'modules/menu-items/client/views/analytics-menu-items.client.view.html'
      });
  }
]);
