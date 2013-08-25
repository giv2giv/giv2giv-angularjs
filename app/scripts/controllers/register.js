'use strict';

angular.module('giv2givApp')
  .controller('RegisterCtrl', function ($location, $scope) {
    $scope.message='';
	$scope.submitReg = function(){
		$location.path('endowments');
	}
  });
