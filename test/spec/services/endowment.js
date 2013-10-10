'use strict';

describe('Service: endowment', function () {

  // load the service's module
  beforeEach(module('giv2givAppApp'));

  // instantiate service
  var endowment;
  beforeEach(inject(function (_endowment_) {
    endowment = _endowment_;
  }));

  it('should do something', function () {
    expect(!!endowment).toBe(true);
  });

});
