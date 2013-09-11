'use strict';

angular.module('giv2givApp')
  .controller('DonateCtrl', function ($scope, $location, $routeParams, $http) {
    $scope.donate = function(){
    	$location.path('thankyou');
    };


    $scope.code = $routeParams.code;

    $scope.timeStamp = Math.round(new Date().getTime() / 1000);
    $scope.orderId = 1;
    $scope.key = "";
    $scope.secret = "";
    $scope.signature = CryptoJS.HmacSHA1($scope.key + "&" + $scope.timeStamp + "&" + $scope.orderId, $scope.secret).toString();
    $scope.destinationId = "812-639-3030";
  });
