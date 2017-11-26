'use strict';

angular.module('core').controller('OrderController', ['$scope', 'Authentication', '$http',
  function ($scope, Authentication, $http) {
    // This provides Authentication context.

    $scope.item = {};
    $scope.authentication = Authentication;
    $scope.addItem = false;

    $scope.getMenu = function(){
      $http.get('http://localhost:3000/api/menu-items-analytics').success(function(response){
        $scope.items = response;
        console.log($scope.items);
      });
    };

    //cart items
    var cart = [];

    $scope.addedToCart = function(item, count){
      $scope.item = item;
      $scope.count = count;
      loadCart();
      cart.push(item);
      console.log(cart);
      for(var i  = 0; i < count; i++){
        if(cart[i].item === item){
          cart[i].count += count;
          console.log(count);
          return;
        }
      }
      saveCart();
    };

    //list Items
    function listCart(){
      var copyCart = [];
      for(var i in cart){
        var item = cart[i];
        var itemCopy = {};
        copyCart.push(item);
      }
      return copyCart;
    }

    //remove item from the cart
    $scope.remove = function(item){
      $scope.item = item;
      for(var i in cart){
        if(cart[i].item === item){
          cart[i].item --;
          cart.splice(i, 1);
          saveCart();
          console.log(cart);
          break;
        }
      }
    };

    console.log(cart);
    //save cart
    function saveCart(){
      localStorage.setItem("Cart", JSON.stringify(cart));
    }

    //load items from cart
    function loadCart(){
      cart = JSON.parse(localStorage.getItem("Cart"));

        console.log(listCart());
    }

    loadCart();

    //display cart items
    $scope.display = function(){

      var displayCart = listCart();
      var output = "";
      for(var i = 0; i < displayCart.length; i++){
        output += displayCart[i];
      }
      return output;
    };

    console.log(cart);



    // $scope.addItemtoCart = function(item, count){
    //   var cart = [];
    //   var Item = function(item, count){
    //     // this.name = name;
    //     $scope.item = item;
    //   };
    //   for(var i in cart){
    //     if(cart[i].item === item){
    //       cart[i].count += count;
    //       return;
    //     }
    //   }
    //   var items = new Item(item, count);
    //   cart.push(items);
    //   console.log(cart);
    // };


    // $scope.cartItems = function(added){
    //   var cart = [];
    //   $scope.item = item;
    //   items.push(added);
    //   var JSONAddedItems = JSON.stringify(items);
    //   localStorage.setItem('items', JSONAddedItems);
    //   var addedItems = JSON.parse(localStorage.items);
    //
    //   console.log(addedItems);
    // };
  }
]);
