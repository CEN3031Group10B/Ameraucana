'use strict';
angular.module('menu-items').factory('MenuItems', ['$http', '$resource',
  function($http, $resource) {
    return $resource('/api/menu-items');
    // var methods = {
    //   getItemsAnalytics: function() {
    //     return $http.get('/api/menu-items-analytics');
    //   }
    // };
    //
    // return methods;
  }
]);
