'use strict';

angular.module('giv2givApp')
  .factory('paymentAccounts', function ($resource, appConfig) {
    
    var url = appConfig.apiUrl;
    var endpoint = "/donors/payment_accounts/:id/:action.json"

    return $resource(url + endpoint, {id: "@id", action: "@action"});
  });
