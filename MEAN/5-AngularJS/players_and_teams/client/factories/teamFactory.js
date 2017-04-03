// teamFactory
myAppModule.factory('teamFactory', ['$http', function($http) {
 var factory = {};

//Initialize our list of teams
 var teams = [
   {name: 'Eagles'},
   {name: '49ers'},
   {name: 'Patriots'}
 ];

 //Pass the team list to a controller
 factory.index = function(callback){
   callback(teams);
 }

 //Add new team to the list
factory.create = function(team){
   teams.push(team);
}

//Remove the team from the list
  factory.removeTeam = function($index){
     teams.splice(teams.indexOf($index), 1);
  }

return factory;
}]);
