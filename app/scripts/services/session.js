'use strict';

angular.module('giv2givApp')
  .factory('session', function ($resource, appConfig) {

    var url = appConfig.apiUrl;
    var endpoint = "/sessions/:action.json"

    return $resource(url + endpoint, {action: "@action"});

  });
