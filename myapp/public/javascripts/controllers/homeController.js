app.controller('homeController',['$scope','auth',function($scope,auth){
    $scope.user=null;
    auth.getUser().then(function(data){
        console.log("AUTH IS")
        console.log(data);
        $scope.user = data;
      }).catch(function(){
        $scope.error ='unable to get posts';
      });
}]);