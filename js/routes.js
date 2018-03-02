(function(){
	angular.module('gitApp')
	.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
			$locationProvider.html5Mode({
				enabled: true
			});

			$urlRouterProvider.otherwise('/pagina-nao-encontrada');

			$stateProvider
				.state({
					name: 'home',
					url: '/',
					templateUrl: 'home.html',
					controller: 'homeCtrl'
				})
				.state({
					name: 'busca/:user',
					url: '/busca/:user',
					templateUrl: 'busca-user.html',
					controller: 'userCtrl'
				})
				.state({
					name: 'otherwise',
					url: '/pagina-nao-encontrada',
					templateUrl: '404.html'
				})
		})
})();