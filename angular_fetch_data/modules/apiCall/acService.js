fetchDataApp.service( 'acService', function( $http, $q ) {
  var deferred = $q.defer();
  $http.get( 'http://swapi.co/api/starships/9000/' ).then( function( response ) {
	  deferred.resolve( response );
  }, function( response ) {
    console.log(response);
	  deferred.reject( response );
  } );
  return deferred.promise;
} );
