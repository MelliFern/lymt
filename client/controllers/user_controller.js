	'use strict';

module.exports = function(app){


	app.controller('userController',
					['$scope', 'resource','$routeParams','$location','$cookies',  
					function($scope, resource, $routeParams, $location, $cookies){
		//$scope.blog=[];
		var User = resource('user'); 
		$scope.errorhidden = false; 
		$scope.createNewUser = function(newUser){
				User.save(newUser, function(data){
					$cookies.eat = data.eat;
					$location.path('/organizations/'+data.user.user_name);
				});
			}
		$scope.login 		= function(user){
			console.log('in Sign In');
				User.login(user,function(data){
					if(data == null){
						$scope.errorhidden = true;
					 	$scope.message = "Invalid Email and Password. Please try again.";
			      		}
					else{
						$cookies.eat = data.eat;
						$location.path('/organizations/'+data.user.user_name);
					}
				});
			}
	}]);


};