'use strict';

/// user is a service to share data , and is injected in order to use it.

app.controller('LoginCtrl', function ($http, $scope, $location ,user , $rootScope ) {

	$scope.signIn = function(){

		// i recived the data from the form in $scopes (ng-model) .
		var dataContent = {email: $scope.signIn.email,	password: $scope.signIn.password };
		$http({
			method: 'post',
			 url:    'http://localhost:1337/login',
			 data: $.param(dataContent),
			 headers : {'content-type' : 'application/x-www-form-urlencoded'}
		}).then(function succesCallback(response){
			console.log('succes',response.data);
			// se guarda informacion del usuario en el servicio 'user' donde se guarda de manera persistente
			user.setData(response.data.id, response.data.email , response.data.name);
			//actualizo $rootScope.user que se encarga de mostrar informacion del usuario en el controlador principal
			$rootScope.user = user.getData();
			$location.path('/main');
		}, function errorCallback(response){
			$scope.signIn.email = '';
			$scope.signIn.password = '';
			alert("the email or password are invalid !");
			console.log('error',response);
		});

		// loginUser.login(dataContent).then(function succesCallback(response){
		//
		// 	console.log('succes',response.data);
		//
		// 	user.setData(response.data.id, response.data.email);
		// 	$location.path('/main');
		//
		// }, function errorCallback(response){
		// 	$scope.signIn.email = '';
		// 	$scope.signIn.password = '';
		// 	alert("the email or password invalid are !");
		// 	console.log('error',response);
		// });

		}

		$scope.signUp = function(){
			if($scope.signUp.password === $scope.signUp.passwordComfirm){
					var dataContent = { name: $scope.signUpName , email: $scope.signUp.email,	password: $scope.signUp.password };
					console.log(dataContent);
					$http({
						method: 'post',
						 url:    'http://localhost:1337/users',
						 data: $.param(dataContent),
						 headers : {'content-type' : 'application/x-www-form-urlencoded'}
					}).then(function succesCallback(response){
						console.log('succes',response.data);
						// se guarda informacion del usuario en el servicio 'user'
						user.setData(response.data.id, response.data.email);
						//actualizo $rootScope.user que se encarga de mostrar informacion del usuario en el controlador principal
						$rootScope.user = user.getData();
						$location.path('/main');
					}, function errorCallback(response){
						$scope.signIn.email = '';
						$scope.signUn.password = '';
						$scope.signUpName = '';
						alert("ha ocurrido un error creando el usuario !");
						console.log('error',response);
					});
			}else{
			// $scope.signUp.email = '';
			// $scope.signUp.password = '';
			$scope.signUpName = '';
			$scope.signUp.passwordComfirm = '';
			alert("password no coincide con la comfirmacion !");
		}
	}


  });
