/*'use strict';

angular.module('core').controller('CartController', ['$scope', 'Cart', 
function($scope, Cart) {
    $scope.cart = Cart;

    $scope.addtoCart = function() {
        $scope.item = {
            "code": item_code,
            "name": item_name,
            "price": item_price,
            "description": item_description
        };
    $scope.cart.push($scope.item);
    };

    $scope.deleteItem = function(item) {
        var index = $scope.cart.indexOf(item);
        $scope.cart.splice(index,1);
    };
}]); */