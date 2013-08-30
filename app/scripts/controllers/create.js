'use strict';

angular.module('giv2givApp')
  .controller('CreateCtrl', function ($scope, $location) {
  	$scope.endowment = {};
    $scope.endowment.name = "";
    $scope.endowment.description = "";
    $scope.endowment.charities = [];
    $scope.removeCharity = function(){ alert() };
    $scope.addCharity = function(){ alert() };
    $scope.saveEndowment = function(){
    	$location.path('endowments/12345');
    };
  });
