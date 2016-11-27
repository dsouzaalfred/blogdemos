var dataInControllerCntrl = angular.module( 'dataInControllerCntrl', [] );
dataInControllerCntrl.controller( 'dicCntrl', [ '$scope',function( $scope ) {
  $scope.charJson = [
    {
      "charId": "hs00001",
      "charName": "Jon Snow",
      "charTitle": "King in the North"
    },{
      "charId": "hs00002",
      "charName": "Sansa Stark",
      "charTitle": "Lady Of Winterfell"
    },{
      "charId": "hs00003",
      "charName": "Arya Stark",
      "charTitle": "Princess"
    },{
      "charId": "hs00004",
      "charName": "Brandon Stark",
      "charTitle": "Three-eyed Raven"
    }
  ];
} ] );
