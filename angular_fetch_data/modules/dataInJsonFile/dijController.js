var dataInJsonCntrl = angular.module('dataInJsonCntrl', []);
dataInJsonCntrl.controller('dijCntrl', ['$scope', 'dijService', function($scope, dijService){
  dijService.then(function(response){
		$scope.charJson = response.data;
	});
}]);
