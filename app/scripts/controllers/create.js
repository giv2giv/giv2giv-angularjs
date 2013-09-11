'use strict';

angular.module('giv2givApp')
  .controller('CreateCtrl', function ( $scope, $location, $http, limitToFilter) {
  	$scope.endowment = {};
    $scope.endowment.name = "";
    $scope.endowment.description = "";
    $scope.endowment.charities = [];

    $scope.charityList = [
      {name: "Charity One", id: 1234},
      {name: "Charity Two", id: 1235},
      {name: "Charity Three", id: 1236}
    ];


    $scope.removeCharity = function ( charityId ){ 
      $scope.endowment.charities.splice ( charityId, 1 );
      var charityCount = $scope.endowment.charities.length;
      $scope.endowment.charityDistribution = 100 / charityCount;
    };

    $scope.addCharity = function ( charity ) {
      if ( charity != undefined ) {
        $scope.endowment.charities.push ( charity );
        var charityCount = $scope.endowment.charities.length;
        $scope.endowment.charityDistribution = 100 / charityCount;

      };
    };

    $scope.saveEndowment = function (){
    	$location.path('endowments/12345');
    };

    $scope.result = undefined;

    $scope.charities = function(query) {
      var charityArray = [];
      angular.forEach($scope.charityList, function(value, key){
        this.push(value.name);
      }, charityArray);

      return charityArray;
    };

 

  });
