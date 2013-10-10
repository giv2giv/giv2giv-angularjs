'use strict';

angular.module('giv2givApp')
  .factory('donor', function ($resource, appConfig) {
  	
    var url = appConfig.apiUrl;
    var endpoint = "/donors.json"

    return $resource(url + endpoint);
  });
