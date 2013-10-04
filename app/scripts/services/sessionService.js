'use strict';

angular.module('giv2givApp')
  .service('sessionService', function sessionService($rootScope, $cookies, $location, session) {
  	this.auth = function(auth, redirectTo){
        
      if(typeof redirectTo === "undefined"){
        redirectTo = "account";
      }
      session = new session;
      auth["action"] = "create";
  		session.$save(auth, function(){
        if($cookies.token = session.session.token){
          $location.path(redirectTo);
        }
      });

  		return session;

  	};

  	this.isLoggedIn = function(){

  		if( $cookies.token ){
  			return true;
  		}else{
  			return false;
  		}
  	};

  	this.logOut = function(){

  		if( $cookies.token ){
  			$cookies.token = null;
  		}
  	}

  });
