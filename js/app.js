(function(){
	angular.module('gitApp', ['ui.router'])
	.run(['$rootScope', '$state', function($rootScope, $state){
		$rootScope.buscar = function(txt){
			if (txt == '' || txt == undefined) return;
			$state.go('busca/:user', {user:txt});
		}
	}])
})();