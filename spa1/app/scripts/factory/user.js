app.factory('loginUser', function auth($http , data){
  'use strict';
  return {
    // login: Login
    speak: factorytest
  };

  // function Login(){
  //   return $http({
  // 			method: 'post',
  // 			 url:    'http://localhost:1337/login',
  // 			 data: $.param(data),
  // 			 headers : {'content-type' : 'application/x-www-form-urlencoded'}
	// 	   });
  // }

  function factorytest(){
    return ' hey this is the factory function test';
  }


});
