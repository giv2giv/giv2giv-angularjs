'use strict';

angular.module('giv2givApp')
  .controller('CreateCtrl', function ( $scope, $location  ) {
  	$scope.endowment = {};
    $scope.endowment.name = "";
    $scope.endowment.description = "";
    $scope.endowment.charities = [];

    var charities = [
      {name: "Charity One", id: 1234},
      {name: "Charity Two", id: 1235},
      {name: "Charity Three", id: 1236}
    ];

    $scope.endowment.charities = charities;

    $scope.removeCharity = function ( charityId ){ 
      $scope.endowment.charities.splice ( charityId, 1 );
    };

    $scope.addCharity = function ( charity ) {
      if ( charity != undefined ) {
        $scope.endowment.charities.push ( charity );
      };
    };

    $scope.saveEndowment = function (){
    	$location.path('endowments/12345');
    };

  });
