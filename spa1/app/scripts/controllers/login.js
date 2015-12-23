'use strict';

var app = angular.module('spa1App');

app.controller('LoginCtrl', function ($http) {

	$http({
		method: 'GET',
		// url:    'http://localhost:1337/users',
			url: 'http://ve.wktapp.com/montserratina_site/api/tips'
	}).then(function succesCallback(response){
		console.log('succes',response);
	}, function errorCallback(response){
		console.log('error',response);
	});

      // $http.get('localhost:1337/users')
      //       .success(function (data) {
      // 				console.log(data);
      //       });

  });
