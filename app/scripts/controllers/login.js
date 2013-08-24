'use strict';

angular.module('giv2givApp')
	.controller('LoginCtrl', function ($scope, $location) {
		$scope.message='';
	$scope.submitLogin = function(){
		$location.path('endowments');

	};
});