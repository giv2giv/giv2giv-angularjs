'use strict';

describe('Service: sessionHttpInterceptor', function () {

  // load the service's module
  beforeEach(module('giv2givAppApp'));

  // instantiate service
  var sessionHttpInterceptor;
  beforeEach(inject(function (_sessionHttpInterceptor_) {
    sessionHttpInterceptor = _sessionHttpInterceptor_;
  }));

  it('should do something', function () {
    expect(!!sessionHttpInterceptor).toBe(true);
  });

});
