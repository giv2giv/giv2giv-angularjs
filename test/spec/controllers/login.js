'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('giv2givApp'));

  var LoginCtrl,
    scope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($location, $controller, $rootScope) {
    scope = $rootScope.$new();
    location = $location;
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('should redirect user to endowments after login', function () {
    scope.submitLogin();
    expect(location.path()).toBe('/endowments');
  });
});
