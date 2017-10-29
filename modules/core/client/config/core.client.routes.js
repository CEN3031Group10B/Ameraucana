'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'modules/core/client/views/home.client.view.html'
    })
    .state('not-found', {
      url: '/not-found',
      templateUrl: 'modules/core/client/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'modules/core/client/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'modules/core/client/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    })


    .state('order', {
      url: '/order',
      templateUrl: 'modules/core/client/views/order.client.view.html',
      data: {
        ignoreState: true

      }
    })
    .state('modal', {
      url: '/modal',
      templateUrl: 'modules/core/client/views/modal.client.view.html',
      data: {
        ignoreState: true

      }
    })

    .state('checkout', {
      url: '/checkout',
      templateUrl: 'modules/core/client/views/checkout.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('admin-panel', {
      url: '/admin-panel',
      templateUrl: 'modules/core/client/views/adminPanel.client.view.html'

    });
  }
]);
