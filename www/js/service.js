angular.module('starter')
.service('LinhaService', function($http){

    var url= 'js/linha_horario.json';

    return{
      obterHorario : function (){
          return $http.get(url).then(function(response){
              return response.data;
            });
      }

    }

});