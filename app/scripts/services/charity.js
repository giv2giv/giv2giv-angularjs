'use strict';

angular.module('giv2givApp')
  .factory('charity', function ($resource, appConfig) {
    
    var url = appConfig.apiUrl;
    var endpoint = "/charity/:id.json"

    return $resource(url + endpoint, {id: "@id"});
  });
