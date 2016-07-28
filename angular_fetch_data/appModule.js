var fetchDataApp = angular.module('fetchDataApp', [
	'ngRoute',
	'dataInControllerCntrl',
	'dataInServiceCntrl'
]);
fetchDataApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/dataincontroller', {
		templateUrl: 'modules/dataInController/dataInController.html',
		controller: 'dicCntrl'
	})
	.when('/datainservice', {
		templateUrl: 'modules/dataInService/dataInService.html',
		controller: 'disCntrl'
	});
}]);
