app.controller('createDrill',function($scope,$http){
    $scope.submitForm = function(){
        $http.post('create_drill',$scope.formData).
        then(function(response){
            console.log($scope.formData);
            console.log('POST OK');
        }).catch(function(response){
            console.error('POST BAD');
        })
    }
});