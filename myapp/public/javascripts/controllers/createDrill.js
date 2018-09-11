app.controller('createDrill',['$scope','auth','$http',function($scope,auth,$http){

    $scope.user=null;
    auth.getUser().then(function(data){
        console.log("AUTH IS")
        console.log(data);
        $scope.user = data;
      }).catch(function(){
        $scope.error ='unable to get posts';
      });

    $scope.submitForm = function(){
        $http.post('create_drill',$scope.formData).
        then(function(response){
            console.log($scope.formData);
            console.log('POST OK');
        }).catch(function(response){
            console.error('POST BAD');
        })
    }
}]);