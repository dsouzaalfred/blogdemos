var apiCallCntrl = angular.module( 'apiCallCntrl', [] );
apiCallCntrl.controller( 'acCntrl', [ '$scope', 'acService', function( $scope, acService ) {
  $scope.apiCall = true;
  acService.then( function( response ) {
    $scope.apiSuccess = true;
    $scope.apiCall = false;
    $scope.charJson = response.data;
  }, function( response ) {
    $scope.apiSuccess = false;
    $scope.apiCall = false;
    $scope.charJson = response.statusText;
  } );
} ] );
