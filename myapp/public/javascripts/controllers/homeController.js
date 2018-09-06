app.controller('homeController',['$scope','auth',function($scope,auth){
    auth.then(function(data){
        $scope.user = data;
    })
}]);