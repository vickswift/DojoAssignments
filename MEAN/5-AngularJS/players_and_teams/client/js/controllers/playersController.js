myAppModule.controller("playersController", function($scope, playerFactory){
   $scope.players = [];

   //When this controller is loaded, fetch the player list
   playerFactory.getPlayers(function(players){
      $scope.players = players;
   })

   //Pass new player info to the playerFactory
   $scope.addPlayer = function(){
      playerFactory.addPlayer($scope.newPlayer)
      $scope.newPlayer = {}; //Reset newPlayer form
   }

   //Pass $index to playerFactory to remove
   $scope.removePlayer = function($index){
      playerFactory.removePlayer($index);
   }
})
