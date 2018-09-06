app.controller('createUser',function($scope,$http){
    console.log('In Controller');
    $scope.userCreate = function(){
        $http.post('user_create',$scope.formData).
        then(function(response){
            console.log($scope.formData);
            console.log('POST OK');
        }).catch(function(response){
            console.error('POST BAD');
            $scope.errorMsg = response.data;
        })
    }
});