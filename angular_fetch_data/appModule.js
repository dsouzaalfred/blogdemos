var fetchDataApp = angular.module('fetchDataApp', [
	'ngRoute',
	'dataInControllerCntrl',
	'dataInServiceCntrl',
	'dataInJsonCntrl',
	'apiCallCntrl'
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
	})
	.when('/datainjson', {
		templateUrl: 'modules/dataInJsonFile/dataInJson.html',
		controller: 'dijCntrl'
	})
	.when('/apicall', {
		templateUrl: 'modules/apiCall/apiCall.html',
		controller: 'acCntrl'
	});
}]);
