'use strict';

angular.module('giv2givApp', ['stripe', 'ngRoute', 'ngCookies', 'ngResource'])
  .config(function ($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('sessionHttpInterceptor');

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    delete $httpProvider.defaults.headers.post['Content-type'];
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/endowments', {
        templateUrl: 'views/endowments.html',
        controller: 'EndowmentCtrl'
      })
      .when('/endowment/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl',
        requireAuth: true
      })
      .when('/endowment/create/:id', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl',
        requireAuth: true
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
        controller: 'AccountCtrl',
        requireAuth: true
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/thankyou', {
        templateUrl: 'views/thankyou.html',
        controller: 'ThankyouCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  })
.run(function($rootScope, $location, $cookies){

  $rootScope.$on("$routeChangeStart", function(event, next, current){
    if(next.requireAuth && !$cookies.token){
      $location.path('login');
    }
  })

});



