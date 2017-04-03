var myAppModule = angular.module('app', []);

   // Create a factory (attached to this module)
   myAppModule.factory('productFactory', [
    '$http',
    function($http) {
        var factory = {};
        var products = [
            {
                name: "hat",
                quantity: 50,
                price: 14.99
            }
        ];
        factory.create = function(data, callback) {
            data.quantity = 50;
            products.push(data);
            callback(products);
        }
        factory.index = function(callback) {
            callback(products);
        }
        factory.update = function(data, callback) {
            if (Number.isInteger(data.quantity)) {
                if (products[data.id].quantity - data.quantity > 0) {
                    products[data.id].quantity -= data.quantity;
                } else {
                    products[data.id].quantity = 0;
                }
            }
            callback(products);
        }
        factory.delete = function(id, callback) {
            products.splice(id, 1);
            callback(products);
        }
        return factory;

    }
])
    // Create a controller (attached to this module), and inject the productFactory in it.
    myAppModule.controller('productController', ['$scope','productFactory', function($scope, productFactory) {
    // callback, but not as an anonymous function, rather a named function!
    function setProducts(data){
      $scope.products = data;
      $scope.newProduct = {};
    }

    $scope.newProduct = {};
    $scope.products = {};

    $scope.index = function(){
      productFactory.index(setProducts);
    }

    $scope.index();

    $scope.addProduct = function(){
      productFactory.create($scope.newProduct, setProducts);
    }
    $scope.deleteProduct = function(id){
      productFactory.delete(id,setProducts);
    }
  }]);

  myAppModule.controller('ordersController', [
  '$scope',
  'productFactory',
  function($scope, productFactory) {
      function setProducts(data){
        $scope.products = data;
        $scope.newProduct = {};
      }
      $scope.products = [];

      productFactory.index(setProducts);
      $scope.update = function(id) {
          productFactory.update({
              id: id,
              quantity: 1
          }, setProducts);
      }
  }
]);
