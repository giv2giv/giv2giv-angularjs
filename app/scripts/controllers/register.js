'use strict';

angular.module('giv2givApp')
  .controller('RegisterCtrl', function ($location, $scope, sessionService) {

  	if(sessionService.isLoggedIn()){
		$location.path('account');
	}

    $scope.message='';
	$scope.submitReg = function(){
		$location.path('endowments');
	}
  });
