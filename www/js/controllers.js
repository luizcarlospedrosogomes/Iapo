angular.module('starter')
.controller('ListagemController', function($scope, LinhaService) {
   	LinhaService.obterHorario().then(function(dados){

      $scope.listaDeLinhas = dados;
      //$state.go('app.listagem');

    });

});

angular.module('starter').controller('LinhaEscolhidaController', function($scope, $stateParams) {
	
	$scope.linhaEscolhida = angular.fromJson($stateParams.linha);
	
});
