angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('app/listagem');

$stateProvider

.state('app', {
	url : "/app",
	templateUrl : "templates/menu.html",
	abstract: true,
	//controller: 'MenuController'
})

.state('app.listagem',{
	url : "/listagem",
	views : {
		'menuContent' : {
			templateUrl : "templates/listagem.html",
			controller: 'ListagemController'
		}
	}

})

.state('linhaEscolhida', {
    url : '/linhaEscolhida/:linha',
    templateUrl: "templates/linhaEscolhida.html",
    controller: 'LinhaEscolhidaController'

  })

.state('app.valores', {
    url : '/valores',
    views : {
		'menuContent' : {
			templateUrl: "templates/valores.html"
			//controller: 'ListagemController'
		}
	}
 })

.state('app.sobre', {
    url : '/sobre',
     views : {
		'menuContent' : {
			templateUrl: "templates/sobre.html"
			//controller: 'ListagemController'
		}
	}

  })
.state('app.dicas', {
    url : '/dicas',
     views : {
		'menuContent' : {
			templateUrl: "templates/dicas.html"
			//controller: 'ListagemController'
		}
	}

  })
});