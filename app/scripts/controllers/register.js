'use strict';

angular.module('giv2givApp')
  .controller('RegisterCtrl', function ($location, $scope, sessionService, donor) {

  	if(sessionService.isLoggedIn()){
		$location.path('account');
	}

    $scope.message='';
	$scope.submitReg = function(){
		//$location.path('endowments');
		// var results = new donor.$save($scope.donor);
		var Donor = new donor($scope.donor);

		Donor.$save(function(results){
			$scope.debug = results;
		});
		// $scope.debug = results;
	}
  });
