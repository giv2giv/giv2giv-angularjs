'use strict';

angular.module('giv2givApp')
  .controller('DonateCtrl', function ($scope, $location) {
    $scope.donate = function(){
    	$location.path('thankyou');
    };
  });
