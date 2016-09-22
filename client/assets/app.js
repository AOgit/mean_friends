var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function ($routeProvider) {

	$routeProvider
	    .when('/friends', {
	    	templateUrl: 'partials/friends.html'
	    })
	    .when('/new', {
	    	templateUrl: 'partials/new.html'
	    })
	    .when('/friend/:id', {
	    	templateUrl: 'partials/show.html'
	    })
	    .when('/friend/:id/edit', {
	    	templateUrl: 'partials/edit.html'
	    })
	    .otherwise({
	    	redirectTo: '/friends'
	    })

});