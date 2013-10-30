'use strict';

angular.module('giv2givApp')
  .controller('CreateCtrl', function ( $scope, $location, $http, $routeParams, endowment) {
  	$scope.endowment = {};
    $scope.endowment.name = "";
    $scope.endowment.description = "";
    $scope.steps = {};
    $scope.privacyOptions = ["public", "private"];
    $scope.donationAmounts = ["5.00", "10.00", "20.00", "100.00"];
    $scope.endowment.endowment_visibility = $scope.privacyOptions[0];
    $scope.endowment.minimum_donation_amount = $scope.donationAmounts[0];


    $scope.createEndowment = function(){

      var Endowment = new endowment($scope.endowment);

      var result = Endowment.$save(
      function success(data){
        $location.path("endowment/create/" + data.endowment.id);
      },
      function err(){
        console.log("Opps")
      });
    }

  });
