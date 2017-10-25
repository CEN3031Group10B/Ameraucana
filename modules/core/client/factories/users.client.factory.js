'use strict';

angular.module('users').factory('Users', ['$http',
  function($http) {
    var methods = {
      getAllUsers: function() {
        return $http.get('/api/users');
      },

      read: function(username) {
        return $http.get('/api/users', username);
      },

      create: function(user) {
        return $http.post('/api/users', user);
      },

      update: function(username, user) {
        return $http.put('/api/users', username, user);
      }
    };

    return methods;
  }
]);
