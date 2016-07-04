var fetchDataApp = angular.module('fetchDataApp', [
	'ngRoute',
	'dataInControllerCntrl'
]);
fetchDataApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/dataincontroller', {
		templateUrl: 'modules/dataInController/dataInController.html',
		controller: 'dicCntrl'
	});
}]);
