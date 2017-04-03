myAppModule.controller("teamsController", function($scope, teamFactory){
   $scope.teams = [];

   //When this controller is loaded, fetch the team list
   teamFactory.getTeams(function(teams){
      $scope.teams = teams;
   })

   //Pass new team info to the teamFactory
   $scope.addTeam = function(){
      teamFactory.addTeam($scope.newTeam)
      $scope.newTeam = {}; //Reset newTeam form
   }

   //Pass $index to teamFactory to remove
   $scope.removeTeam = function($index){
      teamFactory.removeTeam($index);
   }
})
