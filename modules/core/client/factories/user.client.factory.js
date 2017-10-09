'use strict';

angular.module('core').factory('Users', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:3000/api/users');
      },
      get: function(email) {
        console.log("IN FUNCTION");
        return $http.get('http://localhost:3000/api/users/' + email);
      }
    };

    return methods;
  }
]);
