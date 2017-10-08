'use strict';

angular.module('users', []).factory('Users', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:3000/api/users');
    }
  };

  return methods;
});
