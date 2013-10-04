'use strict';

describe('Controller: CharityDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('giv2givApp'));

  var CharityDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharityDetailsCtrl = $controller('CharityDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
