'use strict';

describe('Service: Session', function () {

  // load the service's module
  beforeEach(module('giv2givApp'));

  // instantiate service
  var Session;
  var $httpBackend;
  beforeEach(inject(function (_Session_) {
    Session = _Session_;
  }));

  it('should retrun session details', function () {
    var loginObject = {email: "demo@example.com", password: "Super@!rdUnguess#!@Passw*rd"};
    console.log(loginObject);

    var session = new Session();

    session = loginObject;

    console.log(session);

    // session.email = loginObject.email;
    // session.password = loginObject.password;

    // console.log(session.$save());
     expect(!!Session).toBe(true);
  });

});
