angular.module('items', []).factory('Items', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:3000/api/items');
    }
  };

  return methods;
});
