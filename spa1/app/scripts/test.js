(function(){

  "use strict";
// service structure

  // constructor function
   function ShareService (){
     this.data = '';
   }

// prototype add a new fuction to ower object
   ShareService.prototype.speak = function(){
     return " Service Sharing data test | this is the data : "+this.data;
   }

   var info = new ShareService();
   info.data = " my message";
   console.log(info.speak());


   // factory structe

   function UserFactory (){
      function hello (){
        return ' hi my name is '+ this.name;
      }

      return {
          name:'',
          speak: hello
      }
   }

   var user = new UserFactory ;
   user.name = 'bob ';
   console.log(' Factory structe | ',user.speak());

})();
