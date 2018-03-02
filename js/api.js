(function(){
	angular.module('gitApp').factory('api', ['$http', function($http){
		function getUser(user){
			return $http.get('https://api.github.com/users/' + user);
		}
		
		function getRepos(user){
			return $http.get('https://api.github.com/users/' + user + '/repos');
		}
		
		function getStarred(user){
			return $http.get('https://api.github.com/users/' + user + '/starred');
		}
		
		return {
			getUser: getUser,
			getRepos: getRepos,
			getStarred: getStarred
		}
	}]);
})();