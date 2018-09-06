app.controller('loginUser',['$scope','auth','$http',function($scope,auth,$http){
   
   
    auth.getUser().then(function(data){
        console.log("AUTH IS")
        console.log(data);
        $scope.user = data;
      }).catch(function(){
        $scope.error ='unable to get posts';
      });


    console.log('In Controller loginUSer');
    $scope.userLogin = function(){
        console.log('In login function');
        $http.post('login_user',$scope.formData).
        then(function(response){
            console.log('POST OK');
            $scope.successMsg = response.data;
            console.log(response);
        }).catch(function(response){
            console.error('POST BAD');
            $scope.errorMessage = response.data;
            console.log(response.data);
        })
    };
}]);