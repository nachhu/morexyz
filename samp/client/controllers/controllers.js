myApp.controller('empController', function($scope,$route,$routeParams,$http){
	$scope.getEmployees = function(){
		$http.get('/api/employees/').then(function(response){
			$scope.employees = response.data;
		});
	};
	$scope.showEmployee = function(){
		var id = $routeParams.id;
		$http.get('/api/employees/'+ id).then(function(response){
			$scope.employee = response.data;
		});
	};
	
	});