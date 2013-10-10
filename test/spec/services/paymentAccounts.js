'use strict';

describe('Service: paymentAccounts', function () {

  // load the service's module
  beforeEach(module('giv2givAppApp'));

  // instantiate service
  var paymentAccounts;
  beforeEach(inject(function (_paymentAccounts_) {
    paymentAccounts = _paymentAccounts_;
  }));

  it('should do something', function () {
    expect(!!paymentAccounts).toBe(true);
  });

});
