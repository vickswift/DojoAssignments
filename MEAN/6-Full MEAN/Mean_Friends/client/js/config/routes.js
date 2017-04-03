let app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
        .when('/', {
            templateUrl: 'static/partials/main.html',
            controller: 'newController',
            // controllerAs: 'NC',
        })
        .when('/new',{
            templateUrl: 'static/partials/new.html',
            controller: 'newController',
            // controllerAs: 'NC',
        })
        .when('/edit/:_id', {
            templateUrl: 'static/partials/edit.html',
            controller: 'editController',
            // controllerAs: 'EC',
        })
        .when('/show/:_id', {
            templateUrl: 'static/partials/show.html',
            controller: 'editController',
            // controllerAs: 'EC',
        })
        .otherwise({
            redirectTo: '/'
        })
});
