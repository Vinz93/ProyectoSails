var app = angular.module('spa1App.services',['ngStorage']);
  app.service('user', function($localStorage){
    this.data = { id : '' , email : '' , name : '' };

    this.setData = function(id , email , name){
      this.data.id = id;
      this.data.email = email;
      this.data.name = name;
      $localStorage.data = this.data;
      return true;
    }

    this.getData = function(){
      return $localStorage.data;
    }

    this.clearData = function () {
      $localStorage.$reset();
      return true;
    }

    this.isLoged = function () {
      if($localStorage.data){
        return true;
      } else {
        return false;
      }
    }

  });


/* =============================================================================================
Otra manera de hacer un servicio , pero es mas complicado injectarle dependencias de esta forma

                function UserInfo(){
                  this.data = { id : '' , email : ''};

                }
                UserInfo.prototype.setData = function(id , email){
                  this.data.id = id;
                  this.data.email = email;
                  return true;
                }

                UserInfo.prototype.getData = function(){
                  return this.data;
                }
                  app.service('user', UserInfo);


  ===========================================================================================*/
