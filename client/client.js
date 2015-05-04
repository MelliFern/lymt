'use strict'; 

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
var lymtApp = angular.module('lymtApp', ['ngRoute','base64','ngCookies']);

// controllers
require('./controllers/user_controller')(lymtApp);
require('./controllers/organization_controller')(lymtApp);


// services
require('./services/resources_routes')(lymtApp);

//directives
//require('./views/directives/create_blog_directive.js')(blogsApp);

// Routes
lymtApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {

		templateUrl	: './views/item1.html',
		//controller 	: 'homeController'
	})
	.when('/item1', {

		templateUrl	: './views/item1.html',
		//controller 	: 'homeController'
	})
	.when('/organizations/:username', {

		templateUrl	: './views/organization.html',
		controller 	: 'orgController'
	})
	.when('/organizations', {

		templateUrl	: './views/organization.html',
		controller 	: 'orgController'
	})
	.when('/item3', {

		templateUrl	: './views/item3.html',
		//controller 	: 'homeController'
	})
	.when('/item4', {

		templateUrl	: './views/item4.html',
		//controller 	: 'homeController'
	})
	.when('/signup', {

		templateUrl	: './views/create_user.html',
		controller 	: 'userController'
	})
	.when('/login', {

		templateUrl	: './views/login.html',
		controller 	: 'userController'
	})
	.when('/about',{
		templateUrl:'./views/about.html'
	})
	.otherwise({
		templateUrl:'./views/four_oh_four.html'	
	})

}]);
