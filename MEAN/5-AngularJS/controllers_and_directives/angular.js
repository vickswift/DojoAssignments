 var myAppModule = angular.module('myApp', []);
 myAppModule.controller('foodController', function ($scope){
  $scope.faveFoods = [];

  $scope.addFood = function(){
    $scope.faveFoods.push($scope.newFood);
    $scope.newFood = "";
 }
});
