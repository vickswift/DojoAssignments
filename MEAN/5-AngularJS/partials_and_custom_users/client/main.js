//  inject the ngRoute dependency in the module.
var myAppModule = angular.module('app', ['ngRoute']);
//  use the config method to set up routing:
myAppModule.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'static/partials/customizeUsers.html',
        controller: 'userController'
    })
    .when('/userlist',{
        templateUrl: 'static/partials/userList.html',
        controller: 'userListController'

    })
    .otherwise({
      redirectTo: '/'
    });
});

   // Create a factory (attached to this module)
 myAppModule.factory('userFactory', ['$http', function($http) {
    var factory = {};

   //Initialize our list of users
    var users = [
      {first_name: 'Mike', last_name:'Smith', fave_lang: 'JS'},
      {first_name: 'Jon', last_name:'Iboh', fave_lang: 'Python'},
      {first_name: 'Ken', last_name:'Dessousa', fave_lang: 'Swift'}
    ];

    //Pass the user list to a controller
    factory.index = function(callback){
      callback(users);
    }

    //Add new user to the list
   factory.create = function(user){
      users.push(user);
   }

   //Remove the user from the list
  factory.delete = function($index){
     users.splice($index, 1);
  }

  return factory;
}]);
//Inject userFactory into each controller
    myAppModule.controller('userController', ['$scope','userFactory', function($scope, userFactory) {
    // callback, but not as an anonymous function, rather a named function!
    function setUsers(data){
      $scope.users = data;
      $scope.newUser = {};
    }

     $scope.users = [];

    //When this controller is loaded, fetch the user list
    userFactory.index(setUsers);

    //Pass new user info to the factory
  $scope.createUser = function(){
     userFactory.create($scope.newUser)
     $scope.newUser = {}; //Reset our form
  }

    //Delegate deleting user to the factory
  $scope.deleteUser = function($index){
  userFactory.delete($index);
}
  }]);

  //Inject userFactory into each controller
  myAppModule.controller('userListController', ['$scope','userFactory', function($scope, userFactory) {

  function setUsers(data){
   $scope.users = data;
  }

  $scope.users = [];

  //When this controller is loaded, fetch the user list
 userFactory.index(setUsers);

}]);
