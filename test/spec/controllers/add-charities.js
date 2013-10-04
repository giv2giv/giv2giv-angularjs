'use strict';

describe('Controller: AddCharitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('giv2givAppApp'));

  var AddCharitiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddCharitiesCtrl = $controller('AddCharitiesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
