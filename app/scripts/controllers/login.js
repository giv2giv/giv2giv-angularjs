'use strict';

angular.module('giv2givApp')
	.controller('LoginCtrl', function ($scope, $location, sessionService) {

	console.log($scope.$parent.awesomeThings);

	if(sessionService.isLoggedIn()){
		$location.path('account');
	}

	$scope.submitLogin = function(){		
		var session = sessionService.auth($scope.auth);

		$scope.debug = session;
	};
});