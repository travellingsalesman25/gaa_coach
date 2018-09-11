app.factory('auth', ['$http', function($http) {
    var getUser = function(){
    return $http.get('isAuthenticated') 
        .then(function(data) { 
            return data; 
            });
        }

    return {
        getUser : getUser 
    }
  }]);