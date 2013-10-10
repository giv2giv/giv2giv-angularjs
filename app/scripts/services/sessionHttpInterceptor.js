'use strict';

angular.module('giv2givApp')
  .factory('sessionHttpInterceptor', function ($q, $cookies) {

    return {
      request: function (config) {
        if($cookies.token){

          config.headers['Authorization'] = "Token token=" 
          + $cookies.token;
        }
        return config;
      }
    };
  });
