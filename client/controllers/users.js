//,['angularUtils.directives.dirPagination']
var app = angular.module("myApp");
myApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('UsersController loaded...');
	$scope.getUsers = function(){
		$http.get('/api/users').then(function(response){
			$scope.users = response.data;
			
		
		});
	}


	$scope.getUser = function(){
		// get the id from the url 
		var id = $routeParams.id;
		$http.get('/api/users/'+id).then(function(response){
			$scope.user = response.data;
		});
	}
//had el code , bs yn3amal submit la el form bstad3e :/ 
	//post a req , ma elo 3alaqa bl form mo 
	$scope.addUsers = function(){
		console.log($scope.user);
		$http.post('/api/users/', $scope.user).then(function(response){
			console.log(response.data);
			window.location.href='#/users';
		});
	}

	$scope.updateUser = function(){
		var id = $routeParams.id;
		$http.put('/api/users/'+id, $scope.user).then(function(response){
			window.location.href='#/users';
		});
	}

	$scope.removeUser = function(id){
		$http.delete('/api/users/'+id).then(function(response){
			window.location.href='#/users';
		});
	}
	$scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
	
}]);