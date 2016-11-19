fetchDataApp.service('dijService', function($http, $q){
  var deferred = $q.defer();
  $http.get('data/data.json').then(function(response){
	  deferred.resolve(response);
  }, function(response){
	  deferred.reject('Error');
  });
  return deferred.promise;
});
