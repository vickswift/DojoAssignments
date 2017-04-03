var app = angular.module('app', ['ngRoute', 'ngStorage']);

//CONFIG
    app.config(function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'static/partials/login.html'
    })
    .when('/login', {
        templateUrl: 'static/partials/login.html'
        })
    .when('/home', {
        templateUrl: 'static/partials/polls_dashboard.html'
        })
    .when('/show/:id', {
        templateUrl: 'static/partials/showpoll.html',
        controller: 'pollsController as PC'
    })
    .when('/newpoll', {
        templateUrl: 'static/partials/newpoll.html'
    })
    .when('/logout', {
        redirectTo: '/login'
    })
    .otherwise({
        redirectTo: '/login'
    })
})
