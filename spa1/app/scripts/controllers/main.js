'use strict';

/**
 * @ngdoc function
 * @name spa1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spa1App
 */
angular.module('spa1App')
  .controller('MainCtrl', function ($http) {
  	$http({
  		method: 'GET',
		// url:    'http://localhost:1337/users',
		url: 'http://ve.wktapp.com/montserratina_site/api/tips'
	}).then(function succesCallback(response){
		console.log('succes',response);
	}, function errorCallback(response){
		console.log('error',response);
	});
  });
