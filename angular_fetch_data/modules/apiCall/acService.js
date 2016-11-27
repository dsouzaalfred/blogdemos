fetchDataApp.service( 'acService', function( $http, $q ) {
  var deferred = $q.defer();
  $http.get( 'http://swapi.co/api/starships/9/' ).then( function( response ) {
	  deferred.resolve( response );
  }, function( response ) {
	  deferred.reject( 'Error' );
  } );
  return deferred.promise;
} );
