'use strict';

var app = angular.module('spa1App', ['ngCookies','ngResource','ngRoute','ngSanitize','ngStorage','spa1App.services']);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// Este controlador puede ser usado en cualquiera de las rutas
  app.controller('appController',function ($scope, user , $location , $rootScope, $http) {

    $rootScope.user = user.getData();

    //Logout Function
    $scope.logOut = function () {
      user.clearData();
      $rootScope.user = {};
      $location.path('/');
    }

    //Update user Change password or email
    $scope.updateUser = function () {
      var contentData = {};
      if(!$scope.userUpdate){
        alert('formulario vacio.');
        return false;
      } else {
        if($scope.userUpdate.email) contentData.email = $scope.userUpdate.email;
        if($scope.userUpdate.password && $scope.userUpdate.passwordComfirm && $scope.userUpdate.passwordComfirm === $scope.userUpdate.password ) {
          contentData.password = $scope.userUpdate.password;
        }else{
          if(!contentData.email || (contentData.email && $scope.userUpdate.passwordComfirm != $scope.userUpdate.password) ){
            alert('Los paswwords no coinciden.');
            $scope.userUpdate = {};
            return false;
          }
        }
        console.log('update data : ',contentData);
        $scope.userUpdate = {};
        $http({
            method: 'put',
             url:    'http://localhost:1337/users/' +  user.getData().id,
             data: $.param(contentData),
             headers : {'content-type' : 'application/x-www-form-urlencoded'}
          }).then(function succesCallback(response){
            // se guarda informacion del usuario en el servicio 'user' donde se guarda de manera persistente
            user.setData(response.data[0].id, response.data[0].email , response.data[0].name);
            //actualizo $rootScope.user que se encarga de mostrar informacion del usuario en el controlador principal
            $rootScope.user = user.getData();
          }, function errorCallback(response){
            alert("No se puedo actualizar la informacion !");
            console.log('error',response);
          });
      }
    }

    $scope.settingsVisibility = false;
    $scope.setSettingsVisibility = function () {
      if($scope.settingsVisibility){
        $scope.settingsVisibility = false;
      } else {
        $scope.settingsVisibility = true;
      }
    }



  });
