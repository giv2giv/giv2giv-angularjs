'use strict';

angular.module('giv2givApp')
  .controller('AccountCtrl', function ($scope, donor) {
    var donor = new donor();

    $scope.debug = donor.$get();
  });
