'use strict';

angular.module('giv2givApp')
  .factory('endowment', function ($resource, appConfig) {
    
    var url = appConfig.apiUrl;
    var endpoint = "/endowment/:id/:action.json"

    return $resource(url + endpoint, {id: "@id", action: "@action"});
  });
