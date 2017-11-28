'use strict';

angular.module('core').controller('OrderController', ['$scope', 'Authentication', '$http',
  function ($scope, Authentication, $http) {
    // This provides Authentication context.

    $scope.item = {};
    $scope.authentication = Authentication;
    $scope.addItem = false;

    //Get Menu Items from Database
    $scope.getMenu = function(){
      $http.get('http://localhost:3000/api/menu-items-analytics').success(function(response){
        $scope.items = response;
        console.log($scope.items);
      });
    };

    //Pushes Item selected to Modal in order.client.view
    $scope.addToCart = function(item){
      $scope.item = item;
    };

    //Initiate Global CART Array
    var cart = [];

    //Add an Item to the Cart
    $scope.addedToCart = function(item){
      var uID = Math.round((new Date()).getTime() /1000);
      var random = Math.floor(Math.random()*1000);
      item.$$hashKey = uID.toString() + random.toString();
      cart.push(item);
      //console.log(item);
      saveCart();
      console.log(cart);
    };

    //Remove Item From the Cart
    $scope.remove = function(item){
      loadCart();

      for(var i = 0; i < $scope.Cart.length; i++){
        if($scope.Cart[i].$$hashKey === item.$$hashKey){
            $scope.Cart.splice(i, 1);

            break;
        }
      }
      saveCart();
      console.log($scope.Cart);
    };

    //Save Cart Items
    function saveCart(){
      localStorage.setItem('Cart', JSON.stringify(cart));

    }

    //Load Items from Cart
    function loadCart(){
      return JSON.parse(localStorage.getItem('Cart'));

    }

    //Display Cart Items
    $scope.display = function(){
      cart = loadCart();
      $scope.Cart = cart;
      console.log(cart);
    };

    //Total Amount of Cart
    $scope.total = function(item) {
      var  sum = 0;

      loadCart();
      for (var i = 0; i < $scope.Cart.length; i++) {
        sum += (parseFloat($scope.Cart[i].item.price));
      }

      localStorage.setItem('payment', sum);
      console.log(sum);
      return sum;
    };

  }
]);
