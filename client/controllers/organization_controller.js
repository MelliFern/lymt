'use strict';

module.exports = function(app){


	app.controller('orgController',
					['$scope', 'resource','$routeParams','$location',  
					function($scope, resource, $routeParams, $location){
		$scope.organizations=[];
		$scope.username = $routeParams.username; 
		
		var Org = resource('organization'); 
		
		$scope.getAll = function(){
									Org.getAll(function(data){
									$scope.organizations = data; 
			});
				
								}
	}]);


};