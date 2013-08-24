'use strict';

angular.module('giv2givApp')
	.controller('LoginCtrl', function ($scope) {
		$scope.message='';
		$scope.submitLogin = function(){
		//send required fields of email and password
		//alert('submit code goes here');

		// curl -X POST -H "Content-Type: application/json" -d 
		// '{"email":"kmiller@ltc.com","password":"welcome"}' 
		// http://www.giv2giv.org/api/sessions/create.json

			var data={}; //put in form here
			$http({method: 'POST', data: data, url: 'http://www.giv2giv.org/api/sessions/create.json'}).
				success(function(data, status, headers) {
					// this callback will be called asynchronously
					// when the response is available
					$scope.message ='Success. You are logged in. ';
				}).
				error(function(data, status, headers) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				$scope.message ='Opps. Something went wrong. '+status;
			});
	};
});