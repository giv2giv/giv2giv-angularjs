'use strict';

angular.module('giv2givApp')
  .controller('EndowmentCtrl', function ($scope, $http, limitToFilter, endowment) {
  	 $scope.tags = [];
  	 
    
      $scope.cities = function(cityName) {
	    return $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK &filter=US&q="+cityName).then(function(response){
	      return limitToFilter(response.data, 15);
	    });
	  };

	  $scope.tags.push("Environment",
	  					"Cancer Research",
	  					"Education",
	  					"Arts",
	  					"Science",
	  					"Physical Education",
	  					"Disaster Assistance",
	  					"Adoption",
	  					"Hunger"
	  					);

	  $scope.charities = endowment.query(function(data){
	  	$scope.debug = data;
	  });
	  
  });
