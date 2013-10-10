'use strict';

angular.module('giv2givApp')
  .controller('AddCharitiesCtrl', function ($scope, $routeParams, charity) {
     $scope.endowment = {};
  	 $scope.endowment.charities = [];

  	 $scope.charitySearch = function(query){
  	 	console.log(query);
  	 	var resultsArray = charity.query({query: query}, function(data){
  	 		console.log(data);
  	 	});


  	 	return ["Foo", "bar", "biz"];

  	 }
  });
