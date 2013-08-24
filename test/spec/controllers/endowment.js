'use strict';

describe('Controller: EndowmentCtrl', function () {

  // load the controller's module
  beforeEach(module('giv2givAppApp'));

  var EndowmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EndowmentCtrl = $controller('EndowmentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
