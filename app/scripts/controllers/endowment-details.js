'use strict';

angular.module('giv2givApp')
  .controller('EndowmentDetailsCtrl', function ($scope, $routeParams, $location, endowment) {

  	$scope.url = $location.absUrl();

  	console.log($routeParams.id);

  	$scope.endowment = endowment.get({id: $routeParams.id});

  	$scope.debug = $scope.endowment;

  });
