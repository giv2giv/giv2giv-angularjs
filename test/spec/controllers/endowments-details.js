'use strict';

describe('Controller: EndowmentsDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('giv2givAppApp'));

  var EndowmentsDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EndowmentsDetailsCtrl = $controller('EndowmentsDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
