var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/landingPage.html',
		controller: 'userController',
		
	})
	.when('/homepage', {
		templateUrl: 'partials/homepage.html',
		controller: 'userController',
	})
});
