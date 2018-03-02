(function () {
	angular.module('gitApp').controller('userCtrl', ['$scope', '$stateParams', 'api', function ($scope, $stateParams, $api) {

		$scope.encontrado = true;
		
		$scope.mailUrl = function (email) {
			if (email == null)
				return ''
			else
				return 'mailto:' + email
		}

		$api.getUser($stateParams.user).then(function (res) {
			if (res.message != undefined){
				if (res.message == 'Not Found'){
					$scope.encontrado = false;
					return;
				}
			}			
			$scope.dados = res.data;
		}, function (err) {
			$scope.encontrado = false;
		});

		$scope.getRepos = function () {
			$api.getRepos($stateParams.user).then(function (res) {
				$scope.repos = res.data;
			}, function (err) {
				console.log(err);
			});
		}
		
		$scope.getStarred = function () {
			$api.getStarred($stateParams.user).then(function (res) {
				$scope.starred = res.data;
			}, function (err) {
				console.log(err);
			});
		}
	}]);
})();