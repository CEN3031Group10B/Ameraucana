'use strict';

angular.module('orders').factory('Orders', ['$http',
  function($http) {
    var methods = {
      getAllOrders: function() {
        return $http.get('/api/orders');
      },

      read: function(orderNumber) {
        return $http.get('/api/orders', orderNumber);
      },

      create: function(order) {
        return $http.post('/api/orders', order);
      },

      update: function(orderNumber, order) {
        return $http.put('/api/orders', username, order);
      }
    };

    return methods;
  }
]);
