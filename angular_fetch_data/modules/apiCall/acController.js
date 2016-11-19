var apiCallCntrl = angular.module('apiCallCntrl', []);
apiCallCntrl.controller('acCntrl', ['$scope', 'acService', function($scope, acService){
  acService.then(function(response){
		$scope.charJson = response.data;
    console.log(response.data);
	});
}]);
