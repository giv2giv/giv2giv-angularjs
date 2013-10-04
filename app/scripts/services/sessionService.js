'use strict';

angular.module('giv2givApp')
  .service('sessionService', function sessionService($rootScope, $cookies, $location, session) {
  	this.auth = function(auth, redirectTo){
        
      if(typeof redirectTo === "undefined"){
        redirectTo = "account";
      }
      auth["action"] = "create";
      var Session = new session(auth);
  		Session.$save(function(){
        if($cookies.token = Session.session.token){
          $location.path(redirectTo);
        }
      });

  		return Session;

  	};

  	this.isLoggedIn = function(){

  		if( $cookies.token ){
  			return true;
  		}else{
  			return false;
  		}
  	};

  	this.logOut = function(){
      var auth = {};
      auth["action"] = "destroy";
  		if( $cookies.token ){
  			delete $cookies.token;
        session.$save(auth)
  		}
  	}

  });
