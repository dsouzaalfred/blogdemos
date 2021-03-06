var fetchDataApp = angular.module( 'fetchDataApp', [
	'ngRoute',
	'dataInControllerCntrl',
	'dataInServiceCntrl',
	'dataInJsonCntrl',
  'apiCallCntrl',
	'resolveCntrl'
] );
fetchDataApp.config( [ '$routeProvider', function( $routeProvider ) {
	$routeProvider.
	when( '/dataincontroller', {
		templateUrl: 'modules/dataInController/dataInController.html',
		controller: 'dicCntrl'
	} )
	.when( '/datainservice', {
		templateUrl: 'modules/dataInService/dataInService.html',
		controller: 'disCntrl'
	} )
	.when( '/datainjson', {
		templateUrl: 'modules/dataInJsonFile/dataInJson.html',
		controller: 'dijCntrl'
	} )
	.when( '/apicall', {
 		templateUrl: 'modules/apiCall/apiCall.html',
 		controller: 'acCntrl'
 	} )
	.when( '/resolve', {
		templateUrl: 'modules/resolve/resolve.html',
		controller: 'rCntrl',
		resolve: {
			starshipData: ['rService', function( rService ) {
				return rService.then( function( response ) {
					return response;
				}, function( response ) {
					return response;
				} )
			} ]
		}
	} );
} ] );
