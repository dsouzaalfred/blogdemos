var resolveCntrl = angular.module( 'resolveCntrl', [] );
resolveCntrl.controller( 'rCntrl', [ '$scope', 'starshipData', function( $scope, starshipData ) {
		$scope.apiSuccess = true;
		$scope.charJson = starshipData;
		if( typeof starshipData === 'string' ) {
			$scope.apiSuccess = false;
		}
} ] );
