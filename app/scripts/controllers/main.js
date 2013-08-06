'use strict';

var giv2givApp=angular.module('giv2givApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

// This controller is logging into giv2givApp
giv2givApp.controller('LoginCtrl', function ($scope, $http){
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

giv2givApp.config(function($httpProvider){
	// TODO this tell how to do CORS with Angular
	// http://better-inter.net/enabling-cors-in-angular-js/
	// need to put all this into a service or factory, I think
	//ALSO look at: http://stackoverflow.com/questions/15411818/setting-up-cors-with-angular-js
	//$httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  delete $httpProvider.defaults.headers.post['Content-type'];
});