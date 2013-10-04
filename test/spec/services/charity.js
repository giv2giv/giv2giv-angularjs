'use strict';

describe('Service: charity', function () {

  // load the service's module
  beforeEach(module('giv2givAppApp'));

  // instantiate service
  var charity;
  beforeEach(inject(function (_charity_) {
    charity = _charity_;
  }));

  it('should do something', function () {
    expect(!!charity).toBe(true);
  });

});
