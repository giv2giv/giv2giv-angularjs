'use strict';

angular.module('giv2givApp', [])
  .config(function ($routeProvider, $httpProvider) {

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    delete $httpProvider.defaults.headers.post['Content-type'];
    
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/endowments', {
        templateUrl: 'views/endowments.html',
        controller: 'EndowmentCtrl'
      })
      .when('/endowments/:id', {
        templateUrl: 'views/endowment-details.html',
        controller: 'EndowmentDetailsCtrl'
      })
      .when('/charities/:id', {
        templateUrl: 'views/charity-details.html',
        controller: 'CharityDetailsCtrl'
      })
      .when('/donate/:group_id', {
        templateUrl: 'views/donate.html',
        controller: 'DonateCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });