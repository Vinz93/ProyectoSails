'use strict';

  app.controller('MainCtrl', function ($http , $scope, user , $localStorage) {

    // se recibe el id del usario logeado atraves de un servicio para compartir dicha informacion
    // cualquier controlador puede acceder a la informacion que almacena del servicio.
    var userId = user.getData().id;
  	$http({
  		method: 'GET',
		  url:    'http://localhost:1337/users/'+userId
  	}).then(function succesCallback(response){
      $scope.user = response.data;
      $scope.detailTask = response.data.tasks[0];
  	}, function errorCallback(response){
      $scope.detailTask = null;
  		console.log('error',response);
  	});

  // funcion para mostrar tarea en detalle
  $scope.showDetail = function(index){
    $scope.detailTask = $scope.user.tasks[index];
  }
  // Funcion para crear nuevas tareas
  $scope.createTask = function(){
    console.log('include : ', $scope.newTask);
    var dataContent = { owner : user.getData().id , description : $scope.newTask.description , priority : $scope.newTask.priority , type_task : $scope.newTask.type_task , finish_date : $scope.newTask.finish_date };
    console.log('taskContent : ',dataContent);
    $http({
      method: 'post',
       url:    'http://localhost:1337/tasks',
       data: $.param(dataContent),
       headers : {'content-type' : 'application/x-www-form-urlencoded'}
    }).then(function succesCallback(response){
      $scope.newTask = null;
      $scope.user.tasks.push(response.data);
    }, function errorCallback(response){
      alert("No se puedo crear la tarea!");
      console.log('error',response);
    });
  }

  // Funcion para mostrar y ocultar formulario con ng-show
  $scope.formVisibility = false;
  $scope.setVisibility = function (){

    if($scope.formVisibility){
      $scope.formVisibility = false;
    } else {
      $scope.formVisibility = true;
    }
  }

  $scope.deleteTask = function (index) {
    if(!confirm('¿ Seguro desea eliminar la tarea ?')){
      return false;
    }
    var idTask = $scope.user.tasks[index].id;
    $http({
      method: 'delete',
       url:    'http://localhost:1337/tasks/' + idTask
    }).then(function succesCallback(response){
      $scope.user.tasks.splice(index,1);
    }, function errorCallback(response){
      alert("No se puedo eliminar la tarea!");
      console.log('error',response);
    });
  }

  });
