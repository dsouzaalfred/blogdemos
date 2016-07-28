var dataInServiceCntrl = angular.module('dataInServiceCntrl', []);
dataInServiceCntrl.controller('disCntrl', ['$scope', 'disService', function($scope, disService){
  $scope.charJson = disService;
}]);
