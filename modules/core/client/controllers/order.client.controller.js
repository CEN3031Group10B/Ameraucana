'use strict';

angular.module('core').controller('OrderController', ['$scope', 'Authentication', '$modal', '$log',
  function ($scope, Authentication, $modal, $log) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    //modal
    // this.ordering = function (size, selectedPlate){
    //   var modalInstance = $modal.open({
    //     templateUrl: "modules/core/client/views/modal.client.view.html",
    //     controller: function ($scope, $modalInstance, plate){
    //       $scope.plate = plate;
    //     },
    //     size: size,
    //     resolve: {
    //       item: function () {
    //         return selectedPlate;
    //       }
    //     }
    //   });
    //
    //   // modalInstance.result.then(function (selectedItem)){
    //   //   $scope.selected = selectedItem;
    //   // }, function () {
    //   //   $log.info('Modal dismissed at: ' + new Date());
    //   // });
    // };

    $scope.items = [
      {
        title: 'Marinated Olives',
        description: '',
        price: '$6',
        option: '*Vegan'
      },
      {
        title: 'Charcuterie Plate',
        description: 'Ask Your Server For Daily Special',
        price: '$11',
        option: ''
      },
      {
        title: 'Roasted Italian Sausage',
        description: 'Italian Sausage, Eggplant Peperonata',
        price: '$8',
        option: ''
      },
      {
        title: 'Greek Salad',
        description: 'Romaine, House Vinaigrette, Thinly Sliced Red Onion, Olives, Cucumber, Feta',
        price: '$6',
        option: ''
      },
      {
        title: 'Caesar Salad',
        description: 'Romaine, Traditional Cesar Dressing, Sesame Bread Crumbs, Parmigiano Reggiano',
        price: '$6',
        option: ''
      }
    ];

    $scope.pizzas = [
      {
        title: 'The Marge',
        description: 'Bianco DiNapoli Crushed Tomatoes, Fior Di Latte, Basil, Olive Oil, Sea Salt',
        price: '$12',
        option: 'ADD: Pepperoni $4, Meatballs $4, White Anchovies $3, Olives $2'
      },
      {
        title: 'The Spicy Pancetta',
        description: 'Fior Di Latte, Thinly Sliced Pancetta, Basil, Crushed Red Pepper Flakes, Parmigiano, Reggiano, Local Honey',
        price: '$16',
        option: ''
      },
      {
        title: 'Mortadella Vetri',
        description: 'Thinly Sliced Mortadella, Fior Di Latte, Pistachio Pesto',
        price: '$16',
        option: ''
      },
      {
        title: 'The Falco',
        description: 'Blanco DiNapoli Crushed Tomatoes, Fior Di Latte, Parmigiano Reggiano, Thinly Sliced Red Onion, Pepperoni, Sesame Bread Crumbs',
        price: '$16',
        option: ''
      },
      {
        title: 'Fontina Fungo',
        description: 'Fontina, Portobello Mushrooms, Rosemary, Olive Oil, Sea Salt',
        price: '$14',
        option: 'ADD: Pancetta $4'
      },
      {
        title: 'Fromage A Trois',
        description: 'Fior Di Latte, Forfonzola, Parmigiano Reggiano, Thinly Sliced Red Onion, Oregano, Olive Oil',
        price: '$14',
        option: 'ADD: Pancetta $4 Add: Pepperoni $4'
      },
      {
        title: 'Marinere',
        description: 'Bianco DiNapoli Crushed Tomatoes, Sliced Garlic, Oregano, Olive Oil, Sea Salt',
        price: '$10',
        option: 'ADD: Olives $2, Red Onions $1, White Anchovies $3 *Vegan'
      }
    ];

    $scope.desserts = [
      {
        title: 'Tiramisu',
        description: '',
        price: '$6',
        option: ''
      },
      {
        title: 'Dessert Special',
        description: '',
        price: '$6',
        option: ''
      }
    ];

    $scope.beverages = [
      {
        title: 'Mexican Coke',
        description: '',
        price: '$3',
        option: ''
      },
      {
        title: 'Diet Coke',
        description: '',
        price: '$1.5',
        option: ''
      },
      {
        title: 'San Pellegrino',
        description: '',
        price: '$2',
        option: ''
      },
      {
        title: 'Drip Coffee',
        description: '',
        price: '$2',
        option: ''
      },
      {
        title: 'La Croix',
        description: '',
        price: '$1.5',
        option: ''
      },
      {
        title: 'Opus Nitro Cold Brew Coffee',
        description: '',
        price: '$5',
        option: ''
      },
      {
        title: 'Miller High Life Bottles',
        description: '',
        price: '$3.5',
        option: ''
      },
      {
        title: 'Bell\'s Two Hearted Can',
        description: '',
        price: '$5',
        option: ''
      },
      {
        title: 'Maeloc Dry Cider Bottle',
        description: '',
        price: '$5',
        option: ''
      }
    ];
  }
]);
