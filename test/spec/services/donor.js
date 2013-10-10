'use strict';

describe('Service: donor', function () {

  // load the service's module
  beforeEach(module('giv2givAppApp'));

  // instantiate service
  var donor;
  beforeEach(inject(function (_donor_) {
    donor = _donor_;
  }));

  it('should do something', function () {
    expect(!!donor).toBe(true);
  });

});
