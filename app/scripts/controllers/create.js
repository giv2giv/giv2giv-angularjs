'use strict';

angular.module('giv2givApp')
  .controller('CreateCtrl', function ( $scope, $location, $http, $routeParams, charity) {
  	$scope.endowment = {};
    $scope.endowment.name = "";
    $scope.endowment.description = "";
    $scope.endowment.charities = [];
    $scope.steps = {};

    if($routeParams.id){
      $scope.steps.showStep1 = false;
      $scope.steps.showStep2 = true;
    }else{
      $scope.steps.showStep1 = true;
    }

    $scope.createEndowment = function(){
      $scope.steps.showStep1 = false;
      $scope.steps.showStep2 = true;

      charity.query(function(data){
        $scope.charityList = data;
        console.log(data);
        $location.path("endowment/create/1234");
      });
    }


    $scope.removeCharity = function ( charityId ){ 
      $scope.endowment.charities.splice ( charityId, 1 );
      var charityCount = $scope.endowment.charities.length;
      $scope.endowment.charityDistribution = 100 / charityCount;
    };

    $scope.addCharity = function ( charity ) {
      if ( charity != undefined ) {
        $scope.endowment.charities.push(charity);
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

    $scope.debug = $scope.endowment;

 

  });
